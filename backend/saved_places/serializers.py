from rest_framework import serializers
from .models import Saved_Places


class Saved_PlacesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Saved_Places
        fields = ['id', 'yelp_id', 'business_name', 'category', 'user']
        depth = 1
