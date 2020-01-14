import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.scss'],
})
export class DoneListComponent implements OnInit {
  doneItems = this.todo.doneItems;

  constructor(private todo: TodoService) {}

  ngOnInit() {
    this.todo.changed$.subscribe(() => (this.doneItems = this.todo.doneItems));
  }

  changeState(state: boolean, item: any) {
    item.done = state;
    this.todo.changeState();
  }
}
