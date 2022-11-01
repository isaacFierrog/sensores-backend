from django.db import models


class Modulo(models.Model):
    MINAS = (
        ('HERMOSILLO', 'HERMOSILLO'),
        ('CANANEA', 'CANANEA')
    )
    AREAS = (
        ('A', 'A'),
        ('B', 'B'),
        ('C', 'C'),
        ('D', 'D'),
    )
    
    mac = models.CharField(max_length=20)
    mina = models.CharField(
        max_length=150,
        choices=MINAS
    )
    area = models.CharField(
        max_length=150,
        choices=AREAS
    )
    
    class Meta:
        verbose_name = 'modulo'
        verbose_name_plural = 'modulos'
        db_table = 'modulos'
    
    def __str__(self):
        return self.mac