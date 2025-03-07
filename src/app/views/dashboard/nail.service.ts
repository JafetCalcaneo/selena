import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { environment } from '../../../enviroments/enviroment';
import { nailType } from '../../interfaces/nailType.interface';

@Injectable({
  providedIn: 'root'
})
export class NailService {

  nailUrl: string = environment._proxyNail;

  constructor(private _http: HttpClient) { }


  saveFormData(payload: any): Observable<any> {
    const url = this.nailUrl + '/create';
    console.log(payload);
    return this._http.post(url, payload)
    .pipe(
      map(( res: any ) => res ),
      catchError(( e: HttpErrorResponse ) => throwError(() => console.error(e)))
    )
  }

  saveNailType(name: string): Observable<nailType> {
    const url = this.nailUrl + '/create/type';
    const payload = { name }
    return this._http.post(url, payload).pipe(
      map(( res: any ) => res ),
      catchError(( e: HttpErrorResponse ) => throwError(() => console.error(e)))
    )
  }

  getAllNailTypes(): Observable<any> {
    const url = this.nailUrl + '/all/types';
    return this._http.get(url).pipe(
      map(( res: any ) => res ),
      catchError(( e: HttpErrorResponse ) => throwError(() => console.error(e)))
    )
  }

}
