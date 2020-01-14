import { Component, ChangeDetectorRef } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'levelup-ng-container-vs-presentational';

  todoInput = '';
  doneInput = '';

  constructor(private todo: TodoService, private cdr: ChangeDetectorRef) {}

  addTodo() {
    this.todo.addTodoItem(this.todoInput);
    this.todoInput = '';
  }

  addDone() {
    this.todo.addDoneItem(this.doneInput);
    this.doneInput = '';
  }
}
