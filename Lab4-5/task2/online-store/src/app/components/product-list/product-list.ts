import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../models/product.model';
import { Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList {
  @Input() currentCategory: string = 'Все';
  products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 17 Pro 256Gb оранжевый',
      price: 769300,
      rating: 4.9,
      image: '/assets/images/1.png',
      images: [],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000',
      category: 'Smartphones',
      likes: 0,
    },
    {
      id: 2,
      name: 'Apple iPhone 15 128Gb черный',
      price: 545900,
      rating: 4.9,
      image: '/assets/images/2.png',
      images: [],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000',
      category: 'Smartphones',
      likes: 0,
    },
    {
      id: 3,
      name: 'Samsung Galaxy S24 Ultra 5G 12/256 (черный)',
      price: 505000,
      rating: 4.9,
      image: '/assets/images/3.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-chernyi-116044354/',
      category: 'Smartphones',
      likes: 0,
    },
    {
      id: 4,
      name: 'Ноутбук Apple MacBook Pro 14 2023  16/512Gb Dark Gray',
      price: 989000,
      rating: 5.0,
      image: '/assets/images/4.webp',
      images: [],
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2023-14-2-18-gb-ssd-512-gb-macos-mrx63ru-a-114861343/?srsltid=AfmBOoq4Ai860a9q4Mvk13IveaNC1oVt-WOZOt5W7BUxSArhW0jF3RyB&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_computer_notebook_old_desktop&gbraid=0AAAAAC7-v7jPWptOelSwr6UFLUBIMc1-p&gclid=CjwKCAiAkvDMBhBMEiwAnUA9BZQhBvrRA6ROKb8I_OOmzmWCAG4Kl31ABekE5b-eyUZChJxOkBD_qhoClkoQAvD_BwE',
      category: 'Laptops',
      likes: 0,
    },
    {
      id: 5,
      name: 'Apple AirPods Pro 2nd generation (белый)',
      price: 175000,
      rating: 4.8,
      image: 'assets/images/airpods_pro.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-belyi-106362968/',
      category: 'Accessories',
      likes: 0,
    },
    {
      id: 6,
      name: 'Sony PlayStation 5 Slim',
      price: 345500,
      rating: 4.9,
      image: "assets/images/sony_ps5.jpg",
      images: [],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/',
      category: 'Other',
      likes: 0,
    },
    {
      id: 7,
      name: 'Apple Watch Series 9 GPS 45mm (синий-черный)',
      price: 142450,
      rating: 4.8,
      image: '/assets/images/apple_watch9.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-m-l-45-mm-sinii-chernyi-113398437/',
      category: 'Accessories',
      likes: 0,
    },
    {
      id: 8,
      name: 'ASUS ROG Strix G16 G614JV Gray',
      price: 780000,
      rating: 4.7,
      image: '/assets/images/asus_rog.jpg',
      images: [],
      link: 'https://www.sulpak.kz/g/noutbuki_asus_rog_strix_g16__g614jv_n4263__90nr0c61_m01050__i7161tsg46n?srsltid=AfmBOop8cXWJ5RAXaYEfM-0XIFylioa9mJi8zBruxq0z7FMa15AeKWuy',
      category: 'Laptops',
      likes: 0,
    }, 
    {
      id: 9,
      name: 'Marshall Major IV Black',
      price: 49900,
      rating: 4.8,
      image: '/assets/images/marshal_major_iv.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/naushniki-marshall-major-iv-chernyi-102138144/?srsltid=AfmBOopeRYYn1N6ZVSU1RzLX_mgHJMie_xSF_YLKf-MJMmEytLjPS1Nd',
      category: 'Accessories',
      likes: 0,
    },
    {
      id: 10,
      name: 'Logitech MX Master 3S (черный)',
      price: 45600,
      rating: 4.9,
      image: 'assets/images/10.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/logitech-mx-master-3s-910-006559-chernyi-106172365/',
      category: 'Accessories',
      likes: 0,
    },
    {
      id: 11,
      name: 'Samsung Galaxy Watch 6 44mm Graphite',
      price: 125000,
      rating: 4.7,
      image: '/assets/images/samsung_galaxy_watch6.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch6-44-mm-grafitovyi-chernyi-112368202/?srsltid=AfmBOooNI6gz3ozjRr-X6YhEIGU6bpi9UNWqwpeerw0CGBSMXbJ1Qk_f',
      category: 'Accessories',
      likes: 0,
    },
    {
      id: 12,
      name: 'Телевизор Samsung UE55DU8000UXCE 55" (черный)',
      price: 960700,
      rating: 4.8,
      image: 'assets/images/samsung_tv.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/samsung-ue55du8000uxce-140-sm-chernyi-119247854/',
      category: 'Other',
      likes: 0,
    },
    {
      id: 13,
      name: 'Xiaomi Mi Robot Vacuum-Mop 1C (белый)',
      price: 184500,
      rating: 4.7,
      image: 'assets/images/xiaomi_vacuum.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/xiaomi-mi-robot-vacuum-mop-1c-belyi-102905145/',
      category: 'Other',
      likes: 0,
    },
    {
      id: 19,
      name: 'Ноутбук Acer Nitro 5 15.6" / 16 Гб / SSD 512 Гб',
      price: 460000,
      rating: 5.0,
      image: '/assets/images/acer_nitro_v.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/acer-nitro-5-15-6-16-gb-ssd-512-gb-endless-os-an515-44-nh-q9ger-006-100502951/?srsltid=AfmBOoqUV1w4M6RQlFeC7xZM8MFmI5kBBlbep8OMq_vsL1KvqvjxIbsm',
      category: 'Laptops',
      likes: 0,
    },
    
    {
      id: 3,
      name: 'Xiaomi Redmi Note 13 Pro+ 5G NFC 16/512 (черный)',
      price: 285000,
      rating: 4.8,
      image: 'assets/images/13.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-5g-nfc-16-gb-512-gb-chernyi-118366848/',
      category: 'Smartphones',
      likes: 0,
    },

      {
      id: 6,
      name: 'Dyson V15 Detect Absolute (серебристый)',
      price: 189999,
      rating: 4.9,
      image: 'assets/images/6.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-serebristyi-102269286/',
      category: 'Other',
      likes: 0,
    },
    
    
  ];

  removeProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
    console.log('Товар с id ' + id + ' удален');
  }

  sortProducts() {
  this.products.sort((a: any, b: any) => {
    return a.price -b.price;
  });
  
  this.products = [...this.products];
}

}