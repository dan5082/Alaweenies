from django.conf.urls import url
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    url(r'^login_user/$', views.login_user, name='login_user'),
    url(r'^signup_user/$', views.signup_user, name='signup_user'),
    url(r'^check_email/$', views.check_email, name='check_email'),
    path('', views.home),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)