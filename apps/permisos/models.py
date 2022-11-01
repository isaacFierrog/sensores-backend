from email.policy import default
from django.db import models


class Permiso(models.Model):
    modulo = models.CharField(max_length=200)
    nivel_acceso = models.PositiveIntegerField(default=1)
    
    def __str__(self):
        pass