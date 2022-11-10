from django.urls import path, re_path
from .views import VistaListApiView


urlpatterns = [
    re_path('^pruebas/(?P<valor>.+)/$', VistaListApiView.as_view(), name='pruebas')
]