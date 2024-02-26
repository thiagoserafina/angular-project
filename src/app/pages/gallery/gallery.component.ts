import { Component, inject } from '@angular/core';
import { GalleryCardComponent } from '../../components/gallery-card/gallery-card.component';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'gallery',
  standalone: true,
  imports: [GalleryCardComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  products: ProductService = inject(ProductService);
}
