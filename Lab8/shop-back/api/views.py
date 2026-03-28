from django.http import JsonResponse 
from .models import Category, Product

def product_list(request):
    products = Product.objects.all()
    data = [product.to_json() for product in products]
    return JsonResponse(data, safe=False)

def product_by_ID(request, id): 
    try:
        p = Product.objects.get(id=id)
        return JsonResponse(p.to_json())

    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)

def category_list(request):
    categories = Category.objects.all()
    data = [category.to_json() for category in categories]
    return JsonResponse(data, safe=False)

def category_by_ID(request, id):
    try:
        category = Category.objects.get(id=id)
        return JsonResponse(category.to_json())

    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)


def category_products(request, id):
    try:
        category = Category.objects.get(id=id)
        products = Product.objects.filter(category = category)
        data = [product.to_json() for product in products]
        return JsonResponse(data, safe = False)

    except Category.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)