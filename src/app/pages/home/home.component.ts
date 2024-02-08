import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HelloComponent } from '../../components/hello/hello.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, HelloComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  name = 'Thiago';
}
