import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';

// Todo type to match JSon Placeholder todo
export class Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class TodoWebService {
  url = 'http://jsonplaceholder.typicode.com/todos';
   
   
  constructor(private httpClient: HttpClient) {}


 getList(): Observable<Todo[]> {
   return this.httpClient.get<Todo[]>(this.url);
 }

  add(todoTitle: string) {
    var todo: Todo = new Todo();
    todo.title = todoTitle;
    todo.userId = 1000;
    todo.id = 99999;
    todo.completed = false;

    var todoAsJson = JSON.stringify(todo);

    return this.httpClient.post(this.url, todoAsJson)
    .subscribe({
      next: data => {
        console.log("Add successful of " + todoAsJson);
      },
      error: error => {
        console.error("Add error", error);
      }
    });
  }

  delete(index: number) {
    let deleteUrl = this.url + '/' + index;

    return this.httpClient
      .delete(deleteUrl)
      .subscribe({
        next: data => {
          console.log("Delete successful of " + index);
        },
        error: error => {
          console.error("Delete error", error);
        }
      });
  }  
}
