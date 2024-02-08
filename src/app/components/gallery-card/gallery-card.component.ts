import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'gallery-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './gallery-card.component.html',
  styleUrl: './gallery-card.component.css',
})
export class GalleryCardComponent {
  @Input() image: Image = {
    id: 0,
    alt: '',
    src: '',
    title: '',
    description: '',
  };
}

interface Image {
  id: number;
  alt?: string;
  src: string;
  title: string;
  description: string;
}
