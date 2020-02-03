# from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt

from rest_framework.generics import ListCreateAPIView, UpdateAPIView

from todos.models import TodoItem
from todos.serializers import TodoSerializer


# @csrf_exempt
# def list_todos(request):
#     if request.method == "GET":
#         todos = TodoSerializer(TodoItem.objects.all(), many=True)
#         return JsonResponse({"data": todos.data})

#     elif request.method == "POST":
#         item = TodoSerializer(data={"title": request.POST["title"]})
#         item.is_valid(raise_exception=True)
#         return JsonResponse({"data": item.data})

class TodoItemListEndpoint(ListCreateAPIView):
    serializer_class = TodoSerializer
    queryset = TodoItem.objects.all()


class TodoItemDetailsEndpoint(UpdateAPIView):
    serializer_class = TodoSerializer
    queryset = TodoItem.objects.all()
