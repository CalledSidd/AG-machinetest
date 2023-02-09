from django.db import models
from django.contrib.gis.db import models 

# Create your models here.
class Shop(models.Model):
    shop_name = models.CharField(max_length= 100)
    location  = models.PointField()
    city      = models.CharField(max_length = 100)