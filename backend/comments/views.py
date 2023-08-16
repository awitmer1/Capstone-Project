from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Comment
from .serializers import CommentSerializer
from django.core.exceptions import ObjectDoesNotExist

# Create your views here.


# GET all comments for selected business
@api_view(['GET'])
@permission_classes([AllowAny])
def get_yelp_comments(request, yelp_id):

    try:
        comments = Comment.objects.filter(yelp_id=yelp_id)
    except ObjectDoesNotExist:
        return Response({"error": "No comments exist for this entry"})
    
    serializer = CommentSerializer(comments, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_comment(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    
    if request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)