from django.http import HttpResponse
from django.shortcuts import render

def show_about_page (request):
    print("About page is requested")

    name = 'Nature'
    about = 'This is a webpage for nature'

    data = {
        'name': name,
        'about': about
    }
    return render(request, "about.html", data)

def show_home_page (request):
      return render(request, "home.html", {})
