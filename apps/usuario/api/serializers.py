from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from apps.usuario.models import Usuario



class TokenSerializer(TokenObtainPairSerializer):
    pass


class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = (
            'id',
            'correo',
            'nombre',
            'apellido',
            'mina',
            'area',
            'password'
        )
        read_only_fields = ('id',)
        
    def create(self, validated_data):
        usuario = Usuario(**validated_data)
        usuario.set_password(validated_data['password'])
        usuario.save()
        return usuario
    
    def update(self, instance, validated_data):
        usuario = super().update(instance, validated_data)
        usuario.set_password(validated_data['password'])
        usuario.save()
        return usuario
    
    
class UsuarioTokenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = (
            'correo',
            'nombre',
            'apellido'
        )