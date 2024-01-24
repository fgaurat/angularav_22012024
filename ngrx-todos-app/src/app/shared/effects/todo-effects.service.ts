import { Injectable } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ActionType } from '../actions/action-type';
import { exhaustMap, map, switchMap } from 'rxjs';
import { deleteTodo, loadTodos, loadTodosSuccess } from '../actions/todo.actions';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoEffectsService {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      switchMap(() => this.todoService.findAll()),
      map((todos) => loadTodosSuccess({ todos }))
    )
  );

  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTodo),
      switchMap((action) => this.todoService.delete(action.todo)),
      map((todo: Todo) => loadTodos())
    )
  );


  constructor(private actions$: Actions, private todoService: TodoService) {}
}
