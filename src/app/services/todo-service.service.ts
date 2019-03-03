import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Todo} from '../modules/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit:string = '?_limit=5';
  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }
}
