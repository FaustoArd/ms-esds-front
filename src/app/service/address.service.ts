import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { AddressCompleteResultResponse } from '../model/addressCompleteResultResponse';

const ADDRESS_BASE_URL = 'http://localhost:8090/address-service/api/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  handleError(error:HttpErrorResponse):Observable<any>{
   return throwError(()=> new Error(error.error));
  }

  searchAddressInMaps(address:string):Observable<AddressCompleteResultResponse[]>{
    return this.http.get<AddressCompleteResultResponse[]>(`${ADDRESS_BASE_URL}/search?address=${address}`,this.httpOptions)
    .pipe(catchError(this.handleError));
  }


}
