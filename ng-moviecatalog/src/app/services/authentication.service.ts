import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { User } from '../classes/user';
import { environment } from '../../environments/environment';
import { Role } from '../classes/role';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthenticationService {
  private _user: User;
  private _loggedIn = false;

  constructor(private http: HttpClient) {
    this._user = new User();
  }

  isUser() {
    return this.loggedIn && (this.user.role === Role.USER || this.user.role === Role.ADMIN);
  }

  isAdmin() {
    return this.loggedIn && this.user.role === Role.ADMIN;
  }

  register(user: User) {
    return this.http.post(environment.api + environment.routes.register, user);
  }

  login(user: User) {
    return this.http.post(environment.api + environment.routes.login, user, httpOptions)
      .pipe(
        tap((resUser: User) => {
          this.user = resUser;
          this.loggedIn = true;
        })
      );
  }

  logout() {
    return this.http.get(environment.api + environment.routes.logout, { responseType: 'text' })
      .pipe(
        map(() => {
          this.user = null;
          this.loggedIn = false;
        })
      );
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  get loggedIn(): boolean {
    return this._loggedIn;
  }

  set loggedIn(value: boolean) {
    this._loggedIn = value;
  }
}
