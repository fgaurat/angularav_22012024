import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo';
import { EMPTY, Observable, filter, merge, switchMap } from 'rxjs';
import { MessageBusService } from '../../services/message-bus.service';
import { Action } from '../../models/action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit,AfterViewInit {
  todos$: Observable<Todo[]> = EMPTY;
  displayedColumns: string[] = [
    'id',
    'title',
    'userId',
    'completed',
    'completedChk',
    'action',
  ];

  constructor(private todoService: TodoService,private messageBusService:MessageBusService) {}

  ngOnInit(): void {

    const init$ = this.messageBusService.bus$.pipe(
      filter((action:Action)=>action.type=="LOAD_TODOS"),
      )
    const delete$ = this.messageBusService.bus$.pipe(
      filter((action:Action)=>action.type=="DELETE_TODO"),
      switchMap((action:Action)=>this.todoService.delete(action.payload))
      )
    const new$ = this.messageBusService.bus$.pipe(
      filter((action:Action)=>action.type=="NEW_TODO"),
      switchMap((action:Action)=>this.todoService.save(action.payload))
      )


    this.todos$ = merge(init$,delete$,new$).pipe(
      switchMap(()=>this.todoService.findAll())
    )
  }

  ngAfterViewInit(): void {
    this.messageBusService.dispatch({type:'LOAD_TODOS'})
  }

  delete(todo:Todo) {
    this.messageBusService.dispatch({type:'DELETE_TODO',payload:todo})
    // this.todos$ = this.todoService.delete(todo).pipe(
    //   switchMap(()=>this.todoService.findAll())
    // )

  }
}
