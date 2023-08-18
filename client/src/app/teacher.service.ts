import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Teacher } from './teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private url = 'http://localhost:5200';
  private teachers$: Subject<Teacher[]> = new Subject();

  constructor(private httpClient: HttpClient) { }
  private refreshteachers() {
    this.httpClient.get<Teacher[]>(`${this.url}/teacher`)
      .subscribe(teachers => {
        this.teachers$.next(teachers);
      });
  }
  
  getteachers(): Subject<Teacher[]> {
    this.refreshteachers();
    return this.teachers$;
  }
  
  getteacher(id: string): Observable<Teacher> {
    return this.httpClient.get<Teacher>(`${this.url}/teacher/${id}`);
  }
  
  createteacher(teacher: Teacher): Observable<string> {
    return this.httpClient.post(`${this.url}/teacher`, teacher, { responseType: 'text' });
  }
  
  updateteacher(id: string, teacher: Teacher): Observable<string> {
    return this.httpClient.put(`${this.url}/teacher/${id}`, teacher, { responseType: 'text' });
  }
  
  deleteteacher(id: string): Observable<string> {
    return this.httpClient.delete(`${this.url}/teacher/${id}`, { responseType: 'text' });
  }
 }
