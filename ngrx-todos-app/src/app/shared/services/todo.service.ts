import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(environment.url_todos);
  }

  delete(todo:Todo): Observable<Todo> {
    const url = `${environment.url_todos}/${todo.id}`
    return this.http.delete<Todo>(url);
  }

  save(todo:Todo): Observable<Todo>{
    return this.http.post<Todo>(environment.url_todos,todo);
  }

}
