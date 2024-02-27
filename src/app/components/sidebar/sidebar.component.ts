import { Component, inject } from '@angular/core';
import { SidebarModule } from './sidebar.module';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [SidebarModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  isLogged = localStorage.getItem('isLogged') === 'true';
  isOpen: boolean = false;

  openSidebar() {
    this.isOpen = !this.isOpen;
  }

  closeSidebar() {
    this.isOpen = false;
  }

  logout() {
    localStorage.setItem('loggedIn', 'false');
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
