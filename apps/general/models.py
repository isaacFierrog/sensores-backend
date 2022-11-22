from django.db import models
from django.conf.global_settings import AUTH_USER_MODEL


class ModeloBase(models.Model):
    fecha_creacion = models.DateTimeField(
        auto_now=True,
        auto_now_add=False
    )
    fecha_edicion = models.DateTimeField(
        auto_now=False,
        auto_now_add=True
    )
    # usuario = models.ForeignKey(
    #     AUTH_USER_MODEL,
    #     on_delete=models.CASCADE
    # )
    
    class Meta:
        abstract = True