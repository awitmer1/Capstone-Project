from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Saved_Places
from .serializers import Saved_PlacesSerializer

# Create your views here.

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def get_saved_places(request, user_id):

    if request.method == 'GET':
        saved_places = Saved_Places.objects.filter(user_id=user_id)
        serializer = Saved_PlacesSerializer(saved_places, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = Saved_PlacesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    



@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def modify_saved_place(request,user_id,yelp_id):

    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")

    saved_places = Saved_Places.objects.filter(user_id=user_id)
    serializer = Saved_PlacesSerializer(saved_places, many=True)

    
    if request.method == 'DELETE':
        place = Saved_Places.objects.filter(yelp_id=yelp_id)
        place.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    



