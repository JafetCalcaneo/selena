import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { environment } from '../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor(private _httpClient: HttpClient) { }

  userUrl: string = environment._proxyUser;


  getData() {
    console.log(this.userUrl);
    return this._httpClient.get(`${this.userUrl}/all`)
    .pipe(
      map((res: any) => res),
      catchError((error: HttpErrorResponse) => throwError(() => {
        console.error(error);
        return error;
      }))
    )
  }


}
