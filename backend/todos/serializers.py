from rest_framework import serializers
from todos.models import TodoItem


class TodoSerializer(serializers.ModelSerializer):
    title = serializers.CharField()
    is_done = serializers.BooleanField(default=False)
    created = serializers.DateTimeField(required=False)

    class Meta:
        model = TodoItem
        fields = ("id", "title", "is_done", "created")
