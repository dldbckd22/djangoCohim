from django.urls import path
from makeweb import views
urlpatterns=[
    path('', views.index, name='index')
]
