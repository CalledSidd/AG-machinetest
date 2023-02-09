from django.shortcuts import render
from django.contrib.auth.models import User

from django.views import generic 
from django.contrib.gis.geos import fromstr
from django.contrib.gis.db.models.functions import Distance


from . models import Shop
from . serializers import ShopSerializer

from rest_framework import generics
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

import json

# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    permission_classes = [AllowAny]
    routes = [
        'token',
        'token/refresh',
        'signup',
        'list'
    ]
    return Response(routes)


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    permission_classes = [AllowAny]
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username 
        token['is_superuser'] = user.is_superuser
        return token

class MyTokenObtainPairView(TokenObtainPairView):
    permission_classes = [AllowAny]
    serializer_class = MyTokenObtainPairSerializer

class Signup(APIView):
    def post(self, request):
        body     = request.body.decode('utf-8')
        body     = json.loads(body)
        username = body['username']
        email    = body['email']
        password = body['password']
        if User.objects.filter(email=email).exists():
            return Response(400)
        try:
            user = User.objects.create_user(username=username, email=email, password=password)
            user.save()
        except Exception as e:
            print(e)
        return Response(status = status.HTTP_200_OK)

class ListShops(generics.ListAPIView):
    queryset = Shop.objects.all()
    serializer_class = ShopSerializer
    data = serializer_class.data

    def list(self, request, *args, **kwargs):
        response = super().list(request, *args, **kwargs)
        response.data = {'data': response.data}
        return response

class Shops(APIView):
    def get(self, request):
        s = Shop.objects.all()
        sho = ShopSerializer(s, many=True, context = {'request': request})
        return Response(sho.data, status = status.HTTP_200_OK)
