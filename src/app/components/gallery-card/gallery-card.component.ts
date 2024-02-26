import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'gallery-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './gallery-card.component.html',
  styleUrl: './gallery-card.component.css',
})
export class GalleryCardComponent {
  @Input() product: Product = {
    id: 0,
    src: '',
    title: '',
    description: '',
  };
}
