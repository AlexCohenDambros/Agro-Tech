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

  getById(id: string): Observable<Student>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append('idStudent', id.toString());
    return this.http.get<Student>(`${this.baseUrl}/get-student-byid`, {params: queryParams});
  }

  post(student: Student) {
    return this.http.post(`${this.baseUrl}/add-student`, student)
  }

  put(id: string, student: Student) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('idStudent', id.toString());

    const options = {
        params: queryParams,
    };

    return this.http.put(`${this.baseUrl}/update-student`, student, options)
  }

  delete(id: string){
    let queryParams = new HttpParams();
    queryParams = queryParams.append('idStudent', id.toString());
    return this.http.delete(`${this.baseUrl}/delete-student`, {params: queryParams});
  }

}
