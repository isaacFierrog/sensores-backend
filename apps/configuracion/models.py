from email.policy import default
from django.db import models


class Configuracion(models.Model):
    numero_sensores = models.PositiveIntegerField(default=8)
    
    class Meta:
        verbose_name = 'configuracion'
        verbose_name_plural = 'configuraciones'
        db_table = 'configuraciones'