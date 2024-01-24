import { createReducer, on } from '@ngrx/store';
import { loadTodosSuccess } from '../actions/todo.actions';
import { Todo } from '../models/todo';

export const initialState:Todo[] = [];

export const todoReducer = createReducer(
  initialState,
  on(loadTodosSuccess,(state,action)=> action.todos)
);
