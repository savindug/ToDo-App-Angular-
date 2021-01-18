import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url: string = 'https://jsonplaceholder.typicode.com/todos';
  limit: string = '?_limit=10';
  
  constructor(private http: HttpClient) { }

  getTodos = ():Observable<Todo[]> => {
    return this.http.get<Todo[]>
    (`${this.url}${this.limit}`);
  }
   
  toggleCompleted = (todo:Todo):Observable<any> => {
    return this.http.put(`${this.url}/${todo.id}`, todo, httpOptions)
  }

  deleteTodo = (todo: Todo):Observable<Todo> => {
    return this.http.delete<Todo>(`${this.url}/${todo.id}`, httpOptions) 
  }

  addTodo = (todo: Todo):Observable<Todo> => {
    return this.http.post<Todo>(`${this.url}`, todo, httpOptions) 
  }

}
