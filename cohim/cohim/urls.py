"""cohim URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from django.conf import settings
from django.views.generic import RedirectView
from django.conf.urls.static import static
#'' 은 기본 메인페이지, 메인페이지 열리면 url='/makeweb/'으로 가라는 말
urlpatterns = [
    path('admin/', admin.site.urls),
    path('makeweb/', include('makeweb.urls')),
    path('', RedirectView.as_view(url="/makeweb/" , permanent=True)),
]+ static(settings.STATIC_URL,document_root=settings.STATIC_ROOT)
