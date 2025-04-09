import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../enviroments/enviroment';
import { User } from '../interfaces/user.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  authUrl: string = environment._proxyAuth;

  constructor(private _http: HttpClient, private router: Router) {}

  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());

   hasToken(): boolean {
    console.log(!!localStorage.getItem('user'))
    return !!localStorage.getItem('user');
  }

  get isLogged(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }


  get userData() {
    const user = localStorage.getItem('user');
    if (!user) return false;
    return JSON.parse(user);
  }

  doLogin(payload: { name: string; password: string }): Observable<User> {
    const url = `${this.authUrl}/login`;
    return this._http.post(url, payload).pipe(
      map((res: any) => {
        this.loggedIn.next(true);
        return res;
      }),
      catchError((e: HttpErrorResponse) =>
        throwError(() => {
          console.error(e);
          return e;
        })
      )
    );
  }

  logOut() {
    console.log('Logut');
    localStorage.removeItem('user');
    this.loggedIn.next(false);
    this.router.navigate(['/']);
  }
}
