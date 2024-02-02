import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Enterprise } from '../model/enterprise';

const ENTERPRISE_BASE_URL =  'http:localhost:8090/api/enterprise'

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  handleError(error:HttpErrorResponse):Observable<any>{
    return throwError(()=> new Error(error.error));
   }

   createEnterprise(enterprise:Enterprise):Observable<string>{
    return this.http.post<string>(`${ENTERPRISE_BASE_URL}/enterprise_create`,enterprise,this.httpOptions)
    .pipe(catchError(this.handleError));
   }
}
