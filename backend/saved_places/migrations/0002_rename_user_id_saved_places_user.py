# Generated by Django 4.2.3 on 2023-07-27 21:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('saved_places', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='saved_places',
            old_name='user_id',
            new_name='user',
        ),
    ]
