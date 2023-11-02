from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .webscraper import CreateTabs
from .models import Song
from .serializers import SongSerializer
import json
from rest_framework import status
from rest_framework.response import Response


global usertype
DIFFICULTY = "none"
class CreateUser(APIView):
    def post(self,request):
        data = request.body
        data = json.loads(data)
      

        DIFFICULTY = data['difficulty']
        if data['usertype'] == 'spotify' or data['usertype'] == 'dummy':
            usertype = data['usertype']
            Song.objects.all().delete()
            
            if (usertype != 'spotify'):
                artists = ["metallica","mitski","kanye west","beyonce","steve vai"]
                CreateTabs(artists,False, DIFFICULTY)
                

        return Response(status = status.HTTP_200_OK)
       
class GetSongs(APIView):
    def get(self,request,format = None):
        songs = Song.objects.all()
        serializer = SongSerializer(songs, many=True)
        return Response(serializer.data)
        

    