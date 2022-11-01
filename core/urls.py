from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from apps.usuario.api.views import Login, Logout


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/', include('apps.usuario.api.routers')),
    path('api/', include('apps.modulo.routers')),
    path('api/', include('apps.configuracion.routers')),
    path('api/', include('apps.dato.routers')),
    re_path(r'^.*$', TemplateView.as_view(template_name='index.html'))
]
