import { Component, OnInit, inject } from '@angular/core';
import { TopbarModule } from '../../components/topbar/topbar.module';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [TopbarModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  login = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {
    this.activeRoute.queryParamMap.subscribe((queries) => {
      const logout = Boolean(queries.get('logout'));

      if (logout) {
        this.authService.logout();
      }
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();

    const user = this.authService.login(
      this.login.value.username,
      this.login.value.password
    );

    if (user === undefined) {
      console.log('Login failed');
    } else {
      console.log('Login successful');
      this.router.navigate(['/home']);
    }
  }
}
