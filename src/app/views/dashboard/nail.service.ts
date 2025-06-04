import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { environment } from '../../../enviroments/enviroment';
import { nailType } from '../../interfaces/nailType.interface';
import { Nail } from '../../interfaces/nail.interface';

@Injectable({
  providedIn: 'root'
})
export class NailService {

  nailUrl: string = environment._proxyNail;
  private nailsCat = new BehaviorSubject<any>([]);

  constructor(private _http: HttpClient) { }


  saveFormData(payload: any): Observable<any> {
    const url = this.nailUrl + '/create';
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
      map(( res: any ) => {
        return res.types
      } ),
      catchError(( e: HttpErrorResponse ) => throwError(() => console.error(e)))
    )
  }

  getAllNails(): Observable<Nail[]> {
    const url = this.nailUrl + '/all/nails';
    return this._http.get(url).pipe(
      map(( res: any) => {
        return res
      }),
      catchError(( e: HttpErrorResponse) => throwError(() => console.error(e)))
    )
  }


  getCategoryNailsById(id: string): Observable<Nail[]> {
    const url = this.nailUrl + '/all/category';
    return this._http.post(url, { id }).pipe(
      map((res: any) => res),
      catchError(( e: HttpErrorResponse) => throwError(() => console.error(e)))
    )
  }

  getNailById(id: number): Observable<Nail> {
    const url = this.nailUrl + `nail/${id}`;
    const params = new HttpParams().set('id', id);
    return this._http.get(url, { params }).pipe(
      map((res: any) => res),
      catchError((e: HttpErrorResponse) => throwError(() => console.error(e)))
    )
  }

  get nailsCatMenu(): Observable<any> {
    return this.nailsCat.asObservable();
  }


}
