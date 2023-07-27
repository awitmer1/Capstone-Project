from django.urls import path
from saved_places import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
path('<int:user_id>', views.get_saved_places),
path('<int:user_id>/<str:yelp_id>', views.modify_saved_place),
]
