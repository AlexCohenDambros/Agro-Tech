import { Student } from './../models/Student';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  baseUrl = `${environment.mainUrl}/api/student`;

  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}/get-all-student`);
  }

  getById(id: number): Observable<Student>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append('idStudent', id);
    return this.http.get<Student>(`${this.baseUrl}/get-student-byid`, {params: queryParams});
  }

}
