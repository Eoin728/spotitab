from django.db import models


class Song(models.Model):
    name = models.CharField(max_length=40)
    link = models.CharField(max_length=40)
    artistname = models.CharField(max_length = 30)
