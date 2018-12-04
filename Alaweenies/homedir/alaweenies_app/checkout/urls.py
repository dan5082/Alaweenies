from django.conf.urls import url
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    url(r'^get_order/$', views.get_order, name='get_order'),
    url(r'^update_address/$', views.update_address, name='update_address'),
    url(r'^update_driver/$', views.update_driver, name='update_driver'),
    url(r'^cancel_order/$', views.cancel_order, name='cancel_order'),
    url(r'^get_drivers/$', views.get_drivers, name='get_drivers'),
    path('', views.home),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)