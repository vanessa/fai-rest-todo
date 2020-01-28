from django.contrib import admin
from todos.models import TodoItem


class TodoItemAdmin(admin.ModelAdmin):
    pass

admin.site.register(TodoItem, TodoItemAdmin)
