from django.urls import path
from comments import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
path('', views.get_yelp_comments),
path('post', views.add_comment),
]