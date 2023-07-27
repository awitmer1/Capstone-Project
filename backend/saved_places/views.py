from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Saved_Places
from .serializers import Saved_PlacesSerializer

# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def get_saved_places(request, user_id):
    comments = Saved_Places.objects.filter(user_id=user_id)
    serializer = Saved_PlacesSerializer(comments, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_saved_place(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    
    serializer = Saved_PlacesSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
