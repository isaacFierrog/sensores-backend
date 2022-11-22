from django.db import models
from apps.general.models import ModeloBase


class Dato(ModeloBase):
    sensor = models.ForeignKey(
        'sensor.Sensor',
        on_delete=models.CASCADE,
        blank=True,
        null=True,
        related_name='datos'
    )
    estado = models.BooleanField(default=True)
    valor = models.PositiveIntegerField(default=0)
    
    class Meta:
        verbose_name = 'dato'
        verbose_name_plural = 'datos'
        db_table = 'datos'

    def __str__(self):
        return f'{self.estado}'