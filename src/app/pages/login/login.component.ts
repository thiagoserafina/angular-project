import { Component } from '@angular/core';
import { TopbarModule } from '../../components/topbar/topbar.module';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [TopbarModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  formGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit(e: Event) {
    e.preventDefault();
    console.log(this.loginForm.value);
  }
}
