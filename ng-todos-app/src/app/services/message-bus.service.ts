import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Action } from '../models/action';

@Injectable({
  providedIn: 'root'
})
export class MessageBusService {
  private bus = new Subject<Action>();
  bus$ = this.bus.asObservable()


  constructor() { }

  dispatch(action:Action){
    console.log(action)
    this.bus.next(action)
  }
}
