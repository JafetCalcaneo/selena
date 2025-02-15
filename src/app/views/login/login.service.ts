import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../enviroments/enviroment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authUrl: string = environment._proxyAuth;

  constructor(private _http: HttpClient) { }


  doLogin(payload: {name: string, password: string}): Observable<any> {
    const url = `${this.authUrl}/login`;
    return this._http.post(url, payload)
    .pipe(
      map((res: any) => res),
      catchError((e: HttpErrorResponse) => throwError(() => {
        console.error(e)
        return e;
      })
    )
  )
  }

}
