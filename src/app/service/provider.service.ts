import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Provider } from '../model/provider';

const PROVIDER_BASE_URL = 'http://localhost:8090/api/provider'

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  handleError(error:HttpErrorResponse):Observable<any>{
   return throwError(()=> new Error(error.error));
  }

  createProvider(provider:Provider):Observable<Provider>{
    return this.http.post<Provider>(`${PROVIDER_BASE_URL}/new`,provider,this.httpOptions).pipe(catchError(this.handleError));
  }

}
