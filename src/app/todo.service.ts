import { Injectable, ChangeDetectorRef } from '@angular/core';
import { v4 } from 'uuid';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodoService {
  todoItems: { id: string; label: string; done: boolean }[] = [];
  doneItems: { id: string; label: string; done: boolean }[] = [];

  changed$ = new Subject();

  addTodoItem(label: string) {
    this.todoItems = [...this.todoItems, { id: v4(), label, done: false }];
    this.changed$.next();
  }

  addDoneItem(label: string) {
    this.doneItems = [...this.doneItems, { id: v4(), label, done: true }];
    this.changed$.next();
  }

  changeState() {
    const items = [...this.todoItems, ...this.doneItems];
    this.todoItems = items.filter(i => !i.done);
    this.doneItems = items.filter(i => i.done);
    this.changed$.next();
  }
}
