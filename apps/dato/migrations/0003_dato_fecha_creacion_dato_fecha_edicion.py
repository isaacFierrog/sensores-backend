# Generated by Django 4.1.1 on 2022-11-22 06:17

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('dato', '0002_alter_dato_sensor_alter_dato_valor'),
    ]

    operations = [
        migrations.AddField(
            model_name='dato',
            name='fecha_creacion',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AddField(
            model_name='dato',
            name='fecha_edicion',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
