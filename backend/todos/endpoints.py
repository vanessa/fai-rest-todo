from rest_framework.generics import ListCreateAPIView, UpdateAPIView

from todos.models import TodoItem
from todos.serializers import TodoSerializer

class TodoItemListEndpoint(ListCreateAPIView):
    serializer_class = TodoSerializer
    queryset = TodoItem.objects.order_by("-created")


class TodoItemDetailsEndpoint(UpdateAPIView):
    serializer_class = TodoSerializer
    queryset = TodoItem.objects.all()
