from django.urls import path, re_path
from .views import VistaListApiView


urlpatterns = [
    re_path('^modulos/(?P<mac>.+)/datos/$', VistaListApiView.as_view(), name='pruebas')
]