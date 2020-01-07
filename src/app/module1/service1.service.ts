import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { task } from './task';
import { fullListOfTasks } from './fullListOfTasks';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor() {
    console.log(fullListOfTasks[1])
   }
  getTasksValues() : Observable<task[]>{
    //throw new Error("Method not implemented.");
    return of(fullListOfTasks)
  }
  retrieveTaskList() : Observable<task[]> {
    //throw new Error("Method not implemented.");
    return of(fullListOfTasks);
  }
  retrieveTaskDetail(id: number) : Observable<task> {
    //throw new Error("Method not implemented.");
    return of(fullListOfTasks.find(task => task[id] === id));
  }
  //getLengthTaskList() : number{
    //return fullListOfTasks.length;
  //}
  updateTaskList(actionTask: string) : Observable<task[]>{
    //var len : number = this.getLengthTaskList();
    fullListOfTasks.push({action: actionTask, done :false});
    //this.retrieveTaskList();
    return of(fullListOfTasks)
  }
  changeCheckBox(task: task) : Observable<task[]> {
    if (task.done){ task.done=false}
    else{task.done=true}
    //this.getTasksValues()
    return of(fullListOfTasks)
  }
}
