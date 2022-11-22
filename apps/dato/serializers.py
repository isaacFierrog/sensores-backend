from rest_framework import serializers
from .models import Dato


class DatoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dato
        fields = ('id', 'estado', 'valor', 'fecha_creacion', 'fecha_edicion')
        read_only_fields = ('id', 'fecha_creacion', 'fecha_edicion')