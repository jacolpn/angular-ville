import { Router } from '@angular/router';
import { User } from './user.model';
import { VILLE_API } from './../../app.api';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';

@Injectable()
export class LoginService {
  user: User;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  isLoggedIn(): boolean {
    return this.user !== undefined;
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(
      `${VILLE_API}/login`,
      { email: email, password: password }
    ).do(user => this.user = user);
  }

  handleLogin(path: string) {
    this.router.navigate(['/login', btoa(path)]);
  }
}
