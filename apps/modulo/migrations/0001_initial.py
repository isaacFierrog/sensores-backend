# Generated by Django 4.1.1 on 2022-09-16 04:42

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Modulo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mac', models.CharField(max_length=20)),
                ('mina', models.CharField(choices=[('HERMOSILLO', 'HERMOSILLO'), ('CANANEA', 'CANANEA')], max_length=150)),
                ('area', models.CharField(choices=[('A', 'A'), ('B', 'B'), ('C', 'C'), ('D', 'D')], max_length=150)),
            ],
            options={
                'verbose_name': 'modulo',
                'verbose_name_plural': 'modulos',
                'db_table': 'modulos',
            },
        ),
    ]
