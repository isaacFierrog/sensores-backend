from rest_framework.routers import DefaultRouter
from apps.usuario.api.views import UsuarioViewSet


router = DefaultRouter()
router.register(r'usuarios', UsuarioViewSet, basename='usuarios')
urlpatterns = router.urls