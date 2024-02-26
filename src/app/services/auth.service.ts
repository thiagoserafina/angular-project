import { Injectable, inject } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogged: Boolean = false;
  userService: UserService = inject(UserService);

  login(username: any, password: any) {
    let user = this.userService.users.find(
      (u) => u.username === username && u.password === password
    );

    if (user === undefined) {
      localStorage.setItem('isLogged', 'false');
      this.isLogged = false;
    } else {
      localStorage.setItem('isLogged', 'true');
      this.isLogged = true;
    }
    return user;
  }

  logout() {
    localStorage.setItem('isLogged', 'false');
    this.isLogged = false;
  }

  IsAuthenticated() {
    return this.isLogged;
  }
}
