import { Injectable } from '@angular/core';
import { Product, ProductIterator } from '../models/product';
import { Observable, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    new Product(
      1,
      'https://images.unsplash.com/photo-1697462247859-4c490d6c5c88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Dining table',
      'Dining table with chairs.'
    ),
    new Product(
      2,
      'https://images.unsplash.com/photo-1697462247864-338e7eba8c4c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Double bed',
      'Double bed with pillows.'
    ),
    new Product(
      3,
      'https://images.unsplash.com/photo-1589459072535-550f4fae08d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Armchair',
      'Armchair with footrest.'
    ),
    new Product(
      4,
      'https://images.unsplash.com/photo-1565330502541-4937be8552e3?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Sofa',
      'Sofa with pillows.'
    ),
    new Product(
      5,
      'https://images.unsplash.com/photo-1614631446501-abcf76949eca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FyZHJvYmV8ZW58MHx8MHx8fDA%3D',
      'Wardrobe',
      'Wardrobe with mirror.'
    ),
  ];

  [Symbol.iterator](): IterableIterator<Product> {
    return new ProductIterator(this.products);
  }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
