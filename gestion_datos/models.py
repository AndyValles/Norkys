from django.db import models

# Create your models here.

class producto(models.Model):
    id=models.AutoField(primary_key=True)
    nombre=models.CharField(max_length=50)
    precio=models.IntegerField()
    
    