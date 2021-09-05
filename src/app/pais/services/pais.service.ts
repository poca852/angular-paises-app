import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = 'https://restcountries.eu/rest/v2';

  get httpParams(){
    return new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population');
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino:string): Observable<Pais[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Pais[]>(url, { params: this.httpParams })
  }

  buscarCapital(termino:string):Observable<Pais[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Pais[]>(url, { params: this.httpParams });
  }

  buscarRegion(termino:string):Observable<Pais[]>{

    const url = `${this.apiUrl}/region/${termino}`;

    return this.http.get<Pais[]>(url, { params: this.httpParams })
      .pipe(
        tap(console.log)
      )
  }

  getPaisPorAlpha(id:string):Observable<Pais>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Pais>(url);
  }

}
