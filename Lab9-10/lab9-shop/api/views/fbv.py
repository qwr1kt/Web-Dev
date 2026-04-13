# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from rest_framework import status

# from api.models import Product
# from api.serializers import ProductSerializer


# @api_view(['GET', 'POST'])
# def products_list(request):
#     if request.method == 'GET':
#         products = Product.objects.all()
#         serializer = ProductSerializer(products, many=True)
#         return Response(serializer.data)

#     elif request.method == 'POST':
#         serializer = ProductSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# @api_view(['GET', 'PUT', 'DELETE'])
# def product_detail(request, product_id):
#     try:
#         product = Product.objects.get(pk=product_id)
#     except Product.DoesNotExist:
#         return Response({'error': 'Product not found'}, status=status.HTTP_404_NOT_FOUND)

#     if request.method == 'GET':
#         serializer = ProductSerializer(product)
#         return Response(serializer.data)

#     elif request.method == 'PUT':
#         serializer = ProductSerializer(product, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     elif request.method == 'DELETE':
#         product.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)


from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny

from api.models import Product
from api.serializers import ProductSerializer

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])  
def products_list(request):
    """
    List all products (with 50% limit for guests) or create a new product.
    """
    if request.method == 'GET':
        products = Product.objects.all().order_by('id')
        total_count = products.count()

        if not request.user.is_authenticated:
            limit_50 = total_count // 2
            products = products[:limit_50]
        
        user_limit = request.query_params.get('limit')
        if user_limit:
            try:
                products = products[:int(user_limit)]
            except (ValueError, TypeError):
                pass

        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        if not request.user.is_authenticated:
            return Response(
                {'detail': 'Сначала войдите в систему, чтобы добавлять товары.'}, 
                status=status.HTTP_401_UNAUTHORIZED
            )
            
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([AllowAny])
def product_detail(request, product_id):
    """
    Retrieve, update or delete a product instance.
    """
    try:
        product = Product.objects.get(pk=product_id)
    except Product.DoesNotExist:
        return Response({'error': 'Product not found'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ProductSerializer(product)
        return Response(serializer.data)

    elif request.method in ['PUT', 'DELETE']:
        if not request.user.is_authenticated:
            return Response(
                {'detail': 'У вас нет прав для изменения этого товара.'}, 
                status=status.HTTP_403_FORBIDDEN
            )

        if request.method == 'PUT':
            serializer = ProductSerializer(product, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        elif request.method == 'DELETE':
            product.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)