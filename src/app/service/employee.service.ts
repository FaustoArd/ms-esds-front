import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { JobRole } from '../model/jobRole';
import { Employee } from '../model/employee';
import { Deduction } from '../model/deduction';

const EMPLOYEE_BASE_URL = 'http://localhost:8090/api/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  handleError(error:HttpErrorResponse):Observable<any>{
   return throwError(()=> new Error(error.error));
  }

  createJobRole(jobRole:JobRole):Observable<string>{
    return this.http.post<string>(`${EMPLOYEE_BASE_URL}/job_role_create`, jobRole,this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  createEmployee(employee:Employee):Observable<string>{
    return this.http.post<Employee>(`${EMPLOYEE_BASE_URL}/employee_create`, employee,this.httpOptions)
    .pipe(catchError(this.handleError))
  }

  createDeduction(deduction:Deduction):Observable<Deduction>{
    return this.http.post<Deduction>(`${EMPLOYEE_BASE_URL}/deduction_create`,deduction,this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  findAllJobRoles():Observable<JobRole[]>{
    return this.http.get<JobRole[]>(`${EMPLOYEE_BASE_URL}/job_role_all`,this.httpOptions).pipe(catchError(this.handleError));
  }

  findAllEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${EMPLOYEE_BASE_URL}/employee_all`,this.httpOptions).pipe(catchError(this.handleError));
  }

}
