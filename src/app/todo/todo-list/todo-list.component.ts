import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodoWebService } from '../todo-web.service';
import { TodoService } from './../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component_r2.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {
  items: string[] = [];

  /*
  constructor(private service: TodoService) { }

  ngOnInit(): void {
    this.service.getList().subscribe(todos => this.items = todos);
  }


  constructor(private service: TodoWebService) {
  }

  ngOnInit(): void {
    this.sub = this.service.getList().subscribe(
      res => {        
        res.map(todo => this.items.push(todo.title))
      }
    )
  }
  */
  private sub = new Subscription();

  constructor(private service: TodoWebService) {
  }

  ngOnInit(): void {
    this.sub = this.service.getList().subscribe(
      res => {        
        res.map(todo => this.items.push(todo.title))
      }
    )
  }


  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


  public addNewTask(newTask: string) {
    this.service.add(newTask);
  }

  public deleteTask(index: number) {
    this.service.delete(index);
  }

}
