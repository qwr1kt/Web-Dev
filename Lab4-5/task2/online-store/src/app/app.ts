import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductList } from './components/product-list/product-list';
import { RouterOutlet } from '@angular/router';
import { ProductCard } from "./components/product-card/product-card";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductList],
  template: `
    <header class="header">
      <img src="/assets/images/Logo_of_Kaspi_bank.png" alt="Kaspi Logo" class="kaspi-logo">
      <div class="logo">Kaspi.kz</div>
      <div class="filter-buttons">
        <button [class.active]="selectedCategory === 'Smartphones'" (click)="selectedCategory = 'Smartphones'">Смартфоны</button>
        <button [class.active]="selectedCategory === 'Laptops'" (click)="selectedCategory = 'Laptops'">Ноутбуки</button>
        <button [class.active]="selectedCategory === 'Accessories'" (click)="selectedCategory = 'Accessories'">Аксессуары</button>
        <button [class.active]="selectedCategory === 'Other'" (click)="selectedCategory = 'Other'">Другое</button>
</div>
    </header>   

    <main>
      <app-product-list [currentCategory]="selectedCategory"></app-product-list>
    </main>
  `,
  styleUrls: ['./app.css']
,

  styles: [`
    main {
      min-height: 100vh;
      background-color: #f8f9fa;
    }
  `],
  
})
export class App {
  title = 'online-store';
  selectedCategory: string = 'Все';
}