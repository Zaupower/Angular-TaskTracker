import { Injectable } from '@angular/core';
import { TASKS } from '../mock-task';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }


 public getTasks(): Task[]{
    return TASKS;
  }
}
