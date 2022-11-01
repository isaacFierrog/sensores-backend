from rest_framework.routers import DefaultRouter
from .views import ConfiguracionViewSet


router = DefaultRouter()
router.register(r'configuraciones', ConfiguracionViewSet, basename='configuraciones')
urlpatterns = router.urls