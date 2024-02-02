import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { FortNightResponse } from '../model/fortNightResponse';
import { FortNight } from '../model/fortNight';

const FORT_NIGHT_BASE_URL = 'http://localhost:8090/api/employee';

@Injectable({
  providedIn: 'root'
})
export class FortNightService {

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  handleError(error:HttpErrorResponse):Observable<any>{
    return throwError(()=> new Error(error.error));
   }

   createForthNight(forhtNight:FortNight):Observable<FortNightResponse>{
    return this.http.post<FortNightResponse>(`${FORT_NIGHT_BASE_URL}/fort_night_create`,forhtNight,this.httpOptions)
    .pipe(catchError(this.handleError));
   }

   findfortNightById(id:number):Observable<FortNightResponse>{
    return this.http.get<FortNightResponse>(`${FORT_NIGHT_BASE_URL}/${id}`,this.httpOptions).pipe(catchError(this.handleError));
   }
}
