import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FetchServiceService } from './services/fetch-service.service';
import { TopbarComponent } from './components/topbar/topbar.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TopbarComponent],
  providers: [FetchServiceService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'rocket-project';
  isLogged = false;
  authService: AuthService = inject(AuthService);

  ngOnInit(): void {
    this.isLogged = localStorage.getItem('isLogged') === 'true';
    this.authService.isLogged = this.isLogged;
  }
}
