from rest_framework.viewsets import ModelViewSet
from .serializers import DatoSerializer
from .models import Dato


class DatoViewSet(ModelViewSet):
    serializer_class = DatoSerializer
    queryset = Dato.objects.all()

    def create(self, request):
        valores = request.data['valores']
        valores_serializer = self.get_serializer(data=valores, many=True)
        return super().create(request)