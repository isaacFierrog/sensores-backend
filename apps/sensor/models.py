from pyexpat import model
from django.db import models

# Create your models here.
class Sensor(models.Model):
    modulo = models.ForeignKey(
        'modulo.Modulo',
        on_delete=models.CASCADE,
        blank=True,
        null=True,
        related_name='sensores'
    )
    clave = models.CharField(max_length=100)
    
    def __str__(self):
        return self.clave
    
    class Meta:
        verbose_name = 'sensor'
        verbose_name_plural = 'sensores'
        db_table = 'sensores'