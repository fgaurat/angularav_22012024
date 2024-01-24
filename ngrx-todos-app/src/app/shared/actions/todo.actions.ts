import { createAction, props } from "@ngrx/store";
import { Todo } from "../models/todo";
import { ActionType } from "./action-type";


export const loadTodos = createAction(ActionType.LOAD_TODO);
export const loadTodosSuccess = createAction(ActionType.LOAD_TODO_SUCCESS,props<{todos:Todo[]}>());
export const deleteTodo =createAction(ActionType.DELETE_TODO,props<{todo:Todo}>());
