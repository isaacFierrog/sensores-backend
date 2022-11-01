from rest_framework import serializers
from .models import Dato


class DatoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dato
        fields = ('id', 'estado', 'valor')
        read_only_fields = ('id',)