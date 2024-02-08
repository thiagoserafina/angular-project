import { Component } from '@angular/core';
import { TopbarModule } from './topbar.module';
import { RouterLink } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'topbar',
  standalone: true,
  imports: [TopbarModule, RouterLink, SidebarComponent],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css',
})
export class TopbarComponent {}
