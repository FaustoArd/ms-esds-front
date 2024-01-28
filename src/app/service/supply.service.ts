import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Supply } from '../model/supply';

const SUPPLY_BASE_URL = 'http://localhost:8090/api/supply'

@Injectable({
  providedIn: 'root'
})
export class SupplyService {

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  handleError(error:HttpErrorResponse):Observable<any>{
   return throwError(()=> new Error(error.error));
  }

  createSupply(supply:Supply):Observable<string>{
    return this.http.post<string>(`${SUPPLY_BASE_URL}/create`,supply,this.httpOptions).pipe(catchError(this.handleError));
  }

  getAllSupplies():Observable<Supply[]>{
    return this.http.get<Supply[]>(`${SUPPLY_BASE_URL}/all`,this.httpOptions).pipe(catchError(this.handleError));
  }
}
