# Generated by Django 4.1.1 on 2022-09-16 04:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('modulo', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Sensor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('clave', models.CharField(max_length=100)),
                ('modulo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='modulo.modulo')),
            ],
            options={
                'verbose_name': 'sensor',
                'verbose_name_plural': 'sensores',
                'db_table': 'sensores',
            },
        ),
    ]
