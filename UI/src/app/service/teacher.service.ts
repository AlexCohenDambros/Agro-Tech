import { Teacher } from './../models/Teacher';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) { }

  baseUrl = `${environment.mainUrl}/api/teacher`;

  getAll(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${this.baseUrl}/get-all-teacher`);
  }

  getById(id: string): Observable<Teacher>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append('idTeacher', id.toString());
    return this.http.get<Teacher>(`${this.baseUrl}/get-teacher-byid`, {params: queryParams});
  }

  post(Teacher: Teacher) {
    return this.http.post(`${this.baseUrl}/add-new-teacher`, Teacher)
  }

  put(id: string, Teacher: Teacher) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('idTeacher', id.toString());

    const options = {
        params: queryParams,
    };

    return this.http.put(`${this.baseUrl}/update-teacher`, Teacher, options)
  }

  delete(id: string){
    let queryParams = new HttpParams();
    queryParams = queryParams.append('idTeacher', id.toString());
    return this.http.delete(`${this.baseUrl}/delete-teacher`, {params: queryParams});
  }

}
