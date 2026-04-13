# from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# from .views import CategoryViewSet, ProductViewSet

# router = DefaultRouter()
# router.register(r'categories', CategoryViewSet)
# router.register(r'products', ProductViewSet)

# urlpatterns = [
#     path('', include(router.urls)),
# ]

from django.urls import path

from api.views.fbv import products_list, product_detail

# Product вьюхи — переключаются через __init__.py
from api.views import (
    ProductListAPIView,
    ProductDetailAPIView,
)

# Category вьюхи — всегда из generics напрямую (только там есть)
from api.views.generics import (
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView,
)

urlpatterns = [
    path('products/', ProductListAPIView.as_view(), name='product-list'),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view(), name='product-detail'),

    path('categories/', CategoryListAPIView.as_view(), name='category-list'),
    path('categories/<int:category_id>/', CategoryDetailAPIView.as_view(), name='category-detail'),
    path('categories/<int:category_id>/products/', CategoryProductsAPIView.as_view(), name='category-products'),

    path('fbv/products/', products_list, name='fbv-product-list'),
    path('fbv/products/<int:product_id>/', product_detail, name='fbv-product-detail'),
]