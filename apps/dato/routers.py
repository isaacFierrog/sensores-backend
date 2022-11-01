from rest_framework.routers import DefaultRouter
from .views import DatoViewSet


router = DefaultRouter()
router.register(r'datos', DatoViewSet, basename='datos')
urlpatterns = router.urls