import datetime
from rest_framework import serializers
from .models import Modulo
from apps.sensor.serializers import SensorSerializer
from apps.sensor.models import Sensor
from apps.dato.serializers import DatoSerializer


def obtener_rango_fechas():
    fecha_actual = datetime.date.today()
    anio = fecha_actual.year
    mes = fecha_actual.month
    dia = fecha_actual.day
    
    rango_inferior = datetime.datetime(anio, mes, dia, 0, 0 ,0)
    rango_superior = datetime.datetime(anio, mes, dia, 23, 59 ,59)
    return rango_inferior, rango_superior



class ModuloSerializer(serializers.ModelSerializer):
    sensores = SensorSerializer(many=True, required=False)
    
    class Meta:
        model = Modulo
        fields = '__all__'
        read_only_fields = (
            'id',
            'fecha_creacion',
            'fecha_edicion'
        )
        
    def to_representation(self, instance):
        listado_sensores = instance.sensores.all()
        sensores = []
        for sensor in listado_sensores:
            sensor_serializer = SensorSerializer(sensor).data
            sensor_serializer['datos'] = DatoSerializer(
                sensor.datos.filter(fecha_creacion__range=obtener_rango_fechas()).order_by('-fecha_creacion'), 
                many=True
            ).data
            sensores.append(sensor_serializer)
            
        obj = super().to_representation(instance)
        obj['sensores'] = sensores
        
        
        return obj
        
    def create(self, validated_data):
        sensores = validated_data.pop('sensores')
        modulo = Modulo.objects.create(**validated_data)
        
        if sensores:
            Sensor.objects.bulk_create(
                [Sensor(modulo=modulo, **sensor) for sensor in sensores]
            )
        
        return modulo
    
    def update(self, instance, validated_data):
        sensores = None
        
        if validated_data.get('sensores'):
            sensores = validated_data.pop('sensores')
            
        modulo = super().update(instance, validated_data)
        # Delta + se eliminan sensores, delta - se agregan sensores
        delta_sensores = modulo.sensores.count() - len(sensores)
        
        # Modulo creado sin sensores
        if not modulo.sensores.exists() and sensores:
            Sensor.objects.bulk_create(
                [Sensor(modulo=modulo, **sensor) for sensor in sensores]
            )
            
        # Modulo creado con sensores y se eliminan sensores
        if delta_sensores > 0:
            claves_sensores = tuple(map(lambda s:s['clave'], sensores))
            sensores_eliminados = tuple(
                filter(
                    lambda s:s.clave not in claves_sensores, 
                    modulo.sensores.all()
                )
            )
            modulo.sensores.filter(clave__in=sensores_eliminados).delete()
        elif delta_sensores < 0:
            sensores_existentes = modulo.sensores.values_list('clave', flat=True)
            sensores_nuevos = tuple(
                filter(
                    lambda s:s['clave'] not in sensores_existentes, 
                    sensores    
                )
            )
            Sensor.objects.bulk_create(
                [Sensor(modulo=modulo, **sensor) for sensor in sensores_nuevos]
            )
        else: 
            sensores_actualizados = []
            for idx, sensor in enumerate(modulo.sensores.all()):
                sensor.clave = sensores[idx]['clave']
                sensores_actualizados.append(sensor)
            Sensor.objects.bulk_update(sensores_actualizados, ['clave'])
        
        return modulo
    
        