from rest_framework.viewsets import ModelViewSet
from .serializers import ConfiguracionSerializer
from .models import Configuracion


class ConfiguracionViewSet(ModelViewSet):
    serializer_class = ConfiguracionSerializer
    queryset = Configuracion.objects.all()