from rest_framework import serializers
from .models import Modulo
from apps.sensor.serializers import SensorSerializer
from apps.sensor.models import Sensor
from apps.dato.serializers import DatoSerializer


class ModuloSerializer(serializers.ModelSerializer):
    sensores = SensorSerializer(many=True, required=False)
    
    class Meta:
        model = Modulo
        fields = '__all__'
        read_only_fields = ('id',)
        
    def to_representation(self, instance):
        listado_sensores = instance.sensores.all()
        sensores = []
        for sensor in listado_sensores:
            sensor_serializer = SensorSerializer(sensor).data
            sensor_serializer['datos'] = DatoSerializer(sensor.datos.all(), many=True).data
            sensores.append(sensor_serializer)
            
        obj = super().to_representation(instance)
        obj['sensores'] = sensores
        return obj
        
    def create(self, validated_data):
        sensores = None
        if validated_data.get('sensores'):
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
        
        return modulo
    
        