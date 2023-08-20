# Generated by Django 4.2.3 on 2023-08-20 19:18

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('saved_places', '0002_rename_user_id_saved_places_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='saved_places',
            name='business_name',
            field=models.CharField(default=django.utils.timezone.now, max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='saved_places',
            name='category',
            field=models.CharField(default=django.utils.timezone.now, max_length=255),
            preserve_default=False,
        ),
    ]
