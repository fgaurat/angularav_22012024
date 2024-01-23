import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo';
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit{

  todos$:Observable<Todo[]>=EMPTY
  displayedColumns: string[] = ['id','title','userId','completed'];

  constructor(private todoService:TodoService){}

  ngOnInit(): void {

    this.todos$ = this.todoService.findAll()

  }



}
