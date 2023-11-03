from django.shortcuts import redirect
from rest_framework.views import APIView
from requests import Request,post,get
from rest_framework import status
from rest_framework.response import Response
from .webscraper import CreateTabs
from .models import Song
import os
from dotenv import find_dotenv,load_dotenv
from .views import DIFFICULTY

dotenv_path = find_dotenv()
load_dotenv(dotenv_path)

CLIENT_ID = os.getenv('CLIENT_ID')
CLIENT_SECRET = os.getenv('CLIENT_SECRET')
REDIRECT_URI= os.getenv('REDIRECT_URI')
#DIFFICULTY = os.getenv('DIFFICULTY')
CLIENT_ID = "88f9e35f9d3745da848f74736b94fc31"
CLIENT_SECRET = "c11ac215f5934820a62507282ffa9d01"
REDIRECT_URI= "https://spotitab.onrender.com/api/redirect"


BASE_URL = "https://api.spotify.com/v1/me/"

class AuthorizeUrl(APIView):
    def get(self,request,format = None):
        scope = 'user-top-read'

        url = Request('GET','https://accounts.spotify.com/authorize',params={
            'scope': scope,
            'response_type':'code',
            'redirect_uri':REDIRECT_URI,
            'client_id': CLIENT_ID
        }).prepare().url

        return Response({'url':url},status = status.HTTP_200_OK)
    
def callback(request,format = None):
    code = request.GET.get('code')

    response = post('https://accounts.spotify.com/api/token',data = {
            'grant_type': 'authorization_code',
            'code': code,
            'redirect_uri': REDIRECT_URI,
            'client_id':CLIENT_ID,
            'client_secret':CLIENT_SECRET
        }            
                    ).json()
    
    access_token = response.get('access_token')
 
    global ACCESS_TOKEN
    ACCESS_TOKEN = access_token

    artists = GetTopArtists(0,10)
    CreateTabs(artists,True,DIFFICULTY)
    if (Song.objects.all().count() < 5):
        artists = GetTopArtists(10,20)
        CreateTabs(artists,True,DIFFICULTY)
    
 

    return redirect('http://localhost:3000/songs')
    
def GetTopArtists(start,end):
    headers = {'Content-Type': 'application/json',
                'Authorization': "Bearer " + str(ACCESS_TOKEN)}
   
    response = get('https://api.spotify.com/v1/me/top/artists', {}, headers=headers)
    try:
        return response.json()['items'][start:end]
    except:
        return {'Error': 'Issue with request'}
