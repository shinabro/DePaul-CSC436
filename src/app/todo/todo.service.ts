import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TodoWebService } from './todo-web.service'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: string[] = [];

  constructor() { 
      this.todos.push('project');
      this.todos.push('midterm');
      this.todos.push('final');
  }

  getList(): Observable<string[]> {
    return of(this.todos);
  }

  add(todo: string) {
    this.todos.push(todo);
  }

  delete(index: number) {
    this.todos.splice(index, 1);
  }
}
