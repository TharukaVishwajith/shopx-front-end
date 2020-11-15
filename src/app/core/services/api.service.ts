import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable ,  throwError } from 'rxjs';

import { JwtService } from './jwt.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {

  headers: HttpHeaders = new HttpHeaders();

  constructor(
    private http: HttpClient,
    private jwtService: JwtService
  ) {}


  private formatErrors(error: any): any {
    return  throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    this.tokenSetter(path);
    return this.http.get(`${environment.api_url}${path}`, {headers: this.headers, params: params })
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: any = {}): Observable<any> {
    return this.http.put(
      `${environment.api_url}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: any = {}): Observable<any> {

    this.tokenSetter(path);
    this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(`${environment.api_url}${path}`,
      JSON.stringify(body), { headers: this.headers})
      .pipe(catchError(this.formatErrors));
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.api_url}${path}`
    ).pipe(catchError(this.formatErrors));
  }



  tokenSetter(path): void{
    if (path !== '/login'){
      const token = this.jwtService.getToken();
      if (token !== undefined && token !== null){
        this.headers = this.headers.set('Authorization', 'Bearer ' + token);
      }else{
        this.headers = this.headers.set('Authorization', '');
      }
    }
  }
}
