from django.urls import path
from comments import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
path('<str:yelp_id>', views.get_yelp_comments),
path('post/', views.add_comment),
]