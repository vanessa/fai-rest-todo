from django.urls import path
from users.endpoints import authenticated_user_endpoint
from users.views import UserLoginView, UserLogoutView

app_name = "users"

urlpatterns = [
    path("api/me/", authenticated_user_endpoint),
    path("login/", UserLoginView.as_view(), name="login"),
    path("logout/", UserLogoutView.as_view(), name="logout"),
]
