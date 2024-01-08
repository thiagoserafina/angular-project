import { Component } from '@angular/core';
import { TopbarModule } from './topbar.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'topbar',
  standalone: true,
  imports: [TopbarModule, RouterLink],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css',
})
export class TopbarComponent {}
