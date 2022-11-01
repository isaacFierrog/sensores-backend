from datetime import datetime
from django.contrib.sessions.models import Session
from django.contrib.auth import authenticate
from rest_framework.viewsets import ModelViewSet
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status
from apps.usuario.models import Usuario
from apps.usuario.api.serializers import UsuarioSerializer, UsuarioTokenSerializer, TokenSerializer
from apps.usuario.authentication_mixin import Authentication


class UsuarioViewSet(ModelViewSet):
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()
    
    def create(self, request, *args, **kwargs):
        usuario_serializer = self.get_serializer(data=request.data)
        
        print(usuario_serializer.is_valid())
        if(usuario_serializer.is_valid()):
            print('Los datos son validso')
        
        return super().create(request, *args, **kwargs)


class Login(TokenObtainPairView):
    serializer_class = TokenSerializer
    
    def post(self, request, *args, **kwargs):
        correo = request.data.get('correo', '')
        password = request.data.get('password', '')
        usuario = authenticate(
            username=correo,
            password=password
        )
        
        if usuario:
            login_serializer = self.serializer_class(
                data=request.data
            )
            if login_serializer.is_valid():
                usuario_serializer = UsuarioSerializer(usuario)
                return Response({
                    'token': login_serializer.validated_data['access'],
                    'refresh': login_serializer.validated_data['refresh'],
                    'usuario': usuario_serializer.data,
                    'mensaje': 'Inicio de sesion exitoso'
                }, status=status.HTTP_200_OK)
            return Response({
                'error': 'Datos incorrectos'
            }, status=status.HTTP_400_BAD_REQUEST)
        return Response({
                'error': 'Datos incorrectos'
            }, status=status.HTTP_400_BAD_REQUEST)
        
        
class Logout(GenericAPIView):
    def post(self, request, *args, **kwargs):
        id_usuario = request.data.get('usuario', 0)
        usuario = Usuario.objects.filter(id=id_usuario)
        
        if usuario.exists():
            RefreshToken.for_user(usuario.first())
            return Response({
                'mensaje': 'Sesion cerrada correctamente'
            }, status=status.HTTP_200_OK)
        return Response({
            'error': 'No existe este usuario'
        }, status=status.HTTP_400_BAD_REQUEST)