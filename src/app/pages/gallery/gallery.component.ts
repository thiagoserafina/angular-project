import { Component, OnInit } from '@angular/core';
import { GalleryCardComponent } from '../../components/gallery-card/gallery-card.component';
import { ProductService } from '../../services/product.service';
import { Observable, Subscription, map, tap } from 'rxjs';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gallery',
  standalone: true,
  imports: [GalleryCardComponent, CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent implements OnInit {
  products$!: Observable<Product[]>;
  sub: Subscription = new Subscription();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();

    this.sub = this.products$
      .pipe(tap((product) => console.log(product)))
      .subscribe();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
