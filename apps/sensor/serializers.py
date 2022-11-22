from rest_framework import serializers 
from .models import Sensor


class SensorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sensor
        fields = ('id', 'clave', 'fecha_creacion', 'fecha_edicion')
        read_only_fields = ('id', 'fecha_creacion', 'fecha_edicion')