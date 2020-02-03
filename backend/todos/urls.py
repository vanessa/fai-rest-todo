from django.urls import path
from todos.endpoints import TodoItemListEndpoint, TodoItemDetailsEndpoint

app_name = "todos"

urlpatterns = [
    path("api/todos/", TodoItemListEndpoint.as_view()),
    path("api/todos/<int:pk>/", TodoItemDetailsEndpoint.as_view())
]
