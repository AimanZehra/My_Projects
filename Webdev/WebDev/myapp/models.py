from django.db import models

# Create your models here.

# Creating Categories model
class Category(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()

# Creating Categories model
class Image(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='images')
    added_date = models.DateTimeField()
    cat = models.ForeignKey(Category,on_delete=models.CASCADE)



    
