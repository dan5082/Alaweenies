from django.conf.urls import url
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    url(r'^post_order/$', views.post_order, name='post_order'),
    url(r'^cancel_order/$', views.cancel_order, name='cancel_order'),
    url(r'^get_user/$', views.get_user, name='get_user'),
    url(r'^get_price_modifier/$', views.get_price_modifier, name='get_price_modifier'),
    url(r'^get_most_popular/$', views.get_most_popular, name='get_most_popular'),
    path('', views.home),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)