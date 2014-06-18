from django.conf.urls import patterns, url
from baileys import views

urlpatterns = patterns('',
	url(r'^$', views.index, name = 'index'),
)