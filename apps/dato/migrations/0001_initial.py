# Generated by Django 4.1.1 on 2022-09-16 04:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('sensor', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Dato',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('estado', models.BooleanField(default=True)),
                ('valor', models.PositiveIntegerField()),
                ('sensor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='sensor.sensor')),
            ],
            options={
                'verbose_name': 'dato',
                'verbose_name_plural': 'datos',
                'db_table': 'datos',
            },
        ),
    ]
