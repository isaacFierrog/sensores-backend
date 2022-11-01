from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from .serializers import ModuloSerializer
from .models import Modulo
from apps.dato.models import Dato


class CsrfExemptSessionAuthentication(SessionAuthentication):
    
    def enforce_csrf(self, request):
        return  # To not perform the csrf check previously happening


class ModuloViewSet(ModelViewSet):
    serializer_class = ModuloSerializer
    queryset = Modulo.objects.all()
    authentication_classes = (CsrfExemptSessionAuthentication, BasicAuthentication)
    
    @action(detail=True, methods=['post'], url_path='datos')
    def guardar_datos(self, request, pk=None):
        valores = request.data.get('valores')
        modulo = self.get_queryset().filter(id=pk).first()
        sensores = modulo.sensores.all()
        datos = []
        
        for valor in valores:            
            dato = Dato(
                sensor=sensores.filter(clave=valor['sensor']).first(),
                estado=valor['estado'],
                valor=valor['valor']
            )
            datos.append(dato)
        
        Dato.objects.bulk_create(datos)
         
        return Response({
            'mensaje': 'Datos guardados de forma exitosa'
        }, status=status.HTTP_201_CREATED)