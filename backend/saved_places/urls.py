from django.urls import path
from saved_places import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
path('', views.get_saved_places),
path('/post', views.add_saved_place),
]