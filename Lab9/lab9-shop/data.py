from api.models import Category, Product

Product.objects.all().delete()
Category.objects.all().delete()

c1 = Category.objects.create(name='Smartphones')
c2 = Category.objects.create(name='Laptops')
c3 = Category.objects.create(name='Accessories')
c4 = Category.objects.create(name='Other') 

Product.objects.create(name='Apple iPhone 17 Pro 256Gb', price=769300, description='iPhone 17 Pro - Orange', count=10, category=c1)
Product.objects.create(name='Apple iPhone 15 128Gb', price=545900, description='iPhone 15 - Black', count=10, category=c1)
Product.objects.create(name='Samsung Galaxy S24 Ultra', price=505000, description='S24 Ultra - Black', count=10, category=c1)
Product.objects.create(name='Poco X3', price=131990, description='8 Gb/128 Gb - black', count=10, category=c1)
Product.objects.create(name='Xiaomi Redmi Note 14 Pro', price=151430, description='8 Gb/256 Gb - black', count=10, category=c1)


Product.objects.create(name='MacBook Pro 14 2023', price=989000, description='Apple M3 Pro Chip', count=10, category=c2)
Product.objects.create(name='ASUS ROG Strix G16', price=780000, description='Gaming Laptop Gray', count=10, category=c2)
Product.objects.create(name='MacBook Neo 2026', price=453000, description='Pink, 8GB RAM, 256GB SSD', count=15, category=c2)
Product.objects.create(name='Huawei MateBook D16', price=420000, description='Intel Core i7, Space Gray, 16GB RAM', count=12, category=c2)
Product.objects.create(name='RedmiBook Pro 15 2024', price=510000, description='3.2K Screen, Ryzen 7, Aluminum Body', count=8, category=c2)

Product.objects.create(name='Apple AirPods Pro 2', price=175000, description='White Earbuds', count=10, category=c3)
Product.objects.create(name='Apple Watch Series 9', price=142450, description='GPS 45mm Blue-Black', count=10, category=c3)
Product.objects.create(name='Marshall Major IV Black', price=49900, description='Over-ear headphones', count=10, category=c3)
Product.objects.create(name='Samsung Galaxy Watch 6', price=125000, description='44mm Graphite', count=10, category=c3)
Product.objects.create(name='Logitech MX Master 3S', price=45600, description='Wireless Mouse Black', count=10, category=c3)


Product.objects.create(name='Телевизор Samsung 55"', price=960700, description='UE55DU8000UXCE Black', count=10, category=c4)
Product.objects.create(name='Sony PlayStation 5 Slim', price=345500, description='Slim console edition', count=10, category=c4)
Product.objects.create(name='Dyson Supersonic HD15', price=245000, description='Hair Dryer Nickel/Copper with 4 attachments', count=15, category=c4)
Product.objects.create(name='Dyson V15 Detect Absolute', price=480000, description='Cordless vacuum cleaner with laser slim fluffy', count=8, category=c4)
Product.objects.create(name='DeLonghi Magnifica Start', price=320000, description='Automatic Coffee Maker with Milk Frother', count=5, category=c4)

print("База успешно наполнена твоими товарами!") 