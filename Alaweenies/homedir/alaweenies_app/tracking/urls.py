from django.conf.urls import url
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    url(r'^get_pending_orders/$', views.get_pending_orders, name='get_pending_orders'),
    url(r'^get_driver/$', views.get_driver, name='get_driver'),
    path('', views.home),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)