#### Notes
1. For using the images we need to install : pip install pillow
2. To start a django project we use the command: django-admin startproject Projectname
3. To run the project we use the command: python .\manage.py runserver
4. To map the the template(html) file, we will do chnages in the setting:
eg: 
    TEMPLATES
        'DIRS': [os.path.join(BASE_DIR,'templates')]
5. To create a new app within python we use: python manage.py startapp myapp
6. Models.py file is basically used to handle data (It is basically an entity which stores data (images, text etc.,))
7. To make migrations i.e. to add all chnages in database as well use the command: python manage.py makemigrations
8. Next we use: python manage.py migrate
9. We register our models which we will have created earlier in admin.py (Because we are creating admin panel)
10. To create admin (Username and password), we use below commands:
    python manage.py createsuperuser
11. Used below magic  method (function) to make the heading of the category visible according to the Title:
        def __str__(self):
        return self.title

12. Made folder Media, and will add in settings.py to display the images in category:
STATIC_URL = 'static/'
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
 And also make chnages in urls.py

13. Copy the starter page from bootstrap4 webpage and paste it in home.html
14. Add navbar.html file for the navigation bar
15. We can use 'material color' from wesite for taking the desired color
