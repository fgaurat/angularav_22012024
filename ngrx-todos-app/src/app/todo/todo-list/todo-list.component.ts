import { Component } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  displayedColumns: string[] = [
    'id',
    'title',
    'userId',
    'completed',
    'completedChk',
    'action',
  ];

  todos$:Observable<Todo[]> = EMPTY
}
