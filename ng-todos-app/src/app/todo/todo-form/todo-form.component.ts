import { Component } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';
import { MessageBusService } from '../../services/message-bus.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css',
})
export class TodoFormComponent {
  todo: Todo={
    title:"",
    completed:false,
  };
  constructor(public messageBusService:MessageBusService){

  }
  saveTodo() {
    console.log(this.todo);
    this.messageBusService.dispatch({type:'NEW_TODO',payload:this.todo})

  }
}
