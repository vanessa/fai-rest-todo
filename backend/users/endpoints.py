from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from users.serializers import UserSerializer


@api_view(["GET"])
def authenticated_user_endpoint(request):
    if not request.user.is_authenticated:
        return Response(status=status.HTTP_204_NO_CONTENT)
    serializer = UserSerializer(request.user)
    return Response(serializer.data, status=status.HTTP_200_OK)
