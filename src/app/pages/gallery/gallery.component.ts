import { Component } from '@angular/core';
import { GalleryCardComponent } from '../../components/gallery-card/gallery-card.component';

@Component({
  selector: 'gallery',
  standalone: true,
  imports: [GalleryCardComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  imageArray = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1697462247859-4c490d6c5c88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Mesa de jantar',
      description: 'Mesa de jantar com cadeiras.',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1697462247864-338e7eba8c4c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Cama de casal',
      description: 'Cama de casal com travesseiros e lençóis.',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1589459072535-550f4fae08d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Poltrona',
      description: 'Poltrona com almofadas.',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1565330502541-4937be8552e3?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Sofá de 4 lugares',
      description: 'Sofá de 4 lugares com almofadas.',
    },
  ];
}
