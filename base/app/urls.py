
from django.urls import path
from.views import CreateUser,GetSongs
from .spotiviews import callback,AuthorizeUrl

urlpatterns = [
   path('create/', CreateUser.as_view()),
   path('songs/',GetSongs.as_view()),
      path('get-auth',AuthorizeUrl.as_view()),
    path('redirect',callback)
]
