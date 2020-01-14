import { Component, OnInit, Output } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todoItems = this.todo.todoItems;

  constructor(private todo: TodoService) {}

  ngOnInit() {
    this.todo.changed$.subscribe(() => (this.todoItems = this.todo.todoItems));
  }

  changeState(state: boolean, item: any) {
    item.done = state;
    this.todo.changeState();
  }
}
