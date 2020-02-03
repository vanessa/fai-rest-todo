from django.conf.urls import include, url  # noqa
from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView


urlpatterns = [
    url(r"^admin/", admin.site.urls),
    url(r"^$", TemplateView.as_view(template_name="index.html"), name="index"),
    path("", include("todos.urls"))
]
