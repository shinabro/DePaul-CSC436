import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {
  @Output() newTaskEvent = new EventEmitter<number>();
  
  constructor() { }

  /* A two-way binding performed which 
     pushes text on division */
  public newTask;
  
  ngOnInit(): void {
  }
  public mouseMove(event: Event) {
    console.log(event);
  }
  public addToList() {
    this.newTaskEvent.emit(this.newTask);
    this.newTask = '';
  }

}
