from django.db import models
from authentication.models import User

# Create your models here.

class Saved_Places(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    yelp_id = models.CharField(max_length=255)
    business_name = models.CharField(max_length=255)
    category = models.CharField(max_length=255)