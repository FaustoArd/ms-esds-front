import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Customer } from '../model/customer';

const CUSTOMER_BASE_URL = 'http://localhost:8090/api/customer'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  handleError(error:HttpErrorResponse):Observable<any>{
   return throwError(()=> new Error(error.error));
  }

  createCustomer(customer:Customer):Observable<Customer>{
    return this.http.post<Customer>(`${CUSTOMER_BASE_URL}/new`,customer,this.httpOptions).pipe(catchError(this.handleError));
  }
}
