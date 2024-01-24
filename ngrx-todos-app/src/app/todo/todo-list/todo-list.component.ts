import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { Todo } from '../../shared/models/todo';
import { Store } from '@ngrx/store';
import { deleteTodo, loadTodos } from '../../shared/actions/todo.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{
  displayedColumns: string[] = [
    'id',
    'title',
    'userId',
    'completed',
    'completedChk',
    'action',
  ];

  todos$:Observable<Todo[]> = EMPTY
  constructor(private store: Store<{ todos: Todo[] }>) {
    this.todos$ = store.select('todos');
  }

  ngOnInit(): void {
    this.store.dispatch(loadTodos())
  }

  delete(todo:Todo){
    this.store.dispatch(deleteTodo({todo}))

  }
}
