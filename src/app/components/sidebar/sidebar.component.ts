import { Component } from '@angular/core';
import { SidebarModule } from './sidebar.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [SidebarModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  isOpen: boolean = false;

  openSidebar() {
    this.isOpen = !this.isOpen;
  }

  closeSidebar() {
    this.isOpen = false;
  }
}
