import { Component, inject } from '@angular/core';
import { TopbarModule } from './topbar.module';
import { Router, RouterLink } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'topbar',
  standalone: true,
  imports: [TopbarModule, RouterLink, SidebarComponent],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css',
})
export class TopbarComponent {
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  isLogged = localStorage.getItem('isLogged') === 'true';

  logout() {
    localStorage.setItem('loggedIn', 'false');
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
