from django.db import models


class TodoItem(models.Model):
    title = models.CharField(max_length=255)
    is_done = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        status = "Completo" if self.is_done else "Não completo"
        return f"{self.title} - Status: {status}"
