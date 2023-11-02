
import requests
from .models import Song
import random


def CreateTabs(arr,isSpotify,diff):
    if isSpotify:
        for i in arr:
            i = i['name']
            GetTabs(i,diff)
    else:
         for i in arr:
           
            GetTabs(i,diff)
    

def GetTabs(artistname,diff):
    
    orig = 'https://www.songsterr.com/api/songs?size=20&pattern='
    diffint = 0
    if (diff == 'A'):
        diffint = 2
    elif diff == 'B':
        diffint = 0
    else:
        diffint = 1

    search = orig + artistname + '&difficulty=' + str(diffint)
    html = requests.get(search)

    j = html.json()
    if len(j) > 5:
        end = random.randint(5,len(j))
        begin = end - 5
        j = j[begin:end]

    for i in j:
        name = i['title']
        link = 'https://www.songsterr.com/a/wsa/' + i['artist'].replace(" ", "-") + "-" + i['title'].replace(" ", "-") + "-tab-s" + str(i['songId'])

        Song.objects.create(name = name,link = link,artistname = i['artist'])


