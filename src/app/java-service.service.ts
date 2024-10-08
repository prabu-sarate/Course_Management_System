import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JavaServiceService {
  constructor(private http: HttpClient) {}
  apiurl = 'http://localhost:8080/course';

  getdatafromjava(): Observable<any> {
    return this.http.get(this.apiurl);
  }

  addCourse(course: any): Observable<any> { 
    return this.http.post(this.apiurl, course);
  }
  deleteCourse(id: any): Observable<any> {
    return this.http.delete(this.apiurl+'/'+id);
  }

  updateCourse(course:any):Observable<any>{
    
    return this.http.put(this.apiurl,course);
  }

  getCourse(id:any):Observable<any>{
    return this.http.get(`${this.apiurl}/${id}`)
  }
}
