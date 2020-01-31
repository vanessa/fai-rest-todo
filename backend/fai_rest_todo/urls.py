from django.conf.urls import include, url
from django.contrib import admin
from django.urls import path, re_path
from django.views.generic import TemplateView

urlpatterns = [
    url(r"^admin/", admin.site.urls),
    path("", include("users.urls")),
    # Ordem importa aqui. Tudo que vier em cima não vai ser incluso.
    re_path(
        r"^(?!static)", TemplateView.as_view(template_name="index.html"), name="index"
    ),
]
