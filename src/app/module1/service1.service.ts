import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { task } from './task';
import { fullListOfTasks } from './fullListOfTasks';
import { EvaluateTaskComponent } from './evaluate-task/evaluate-task.component';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  
  constructor() {
   }
  getTaskDoneValues() : Observable<number> { 
    var TasksDone=0;   
    var ataskvar : any
    for ( ataskvar=0; ataskvar<fullListOfTasks.length; ataskvar++){
      if (fullListOfTasks[ataskvar].done){
        TasksDone= TasksDone+1
      }
    }
    return of(TasksDone)
  }
  getTaskUndoneValues() : Observable<number> {
    var TasksUndone=0;
    var anothertaskvar : any
    for ( anothertaskvar=0; anothertaskvar<fullListOfTasks.length; anothertaskvar++){
      if (!fullListOfTasks[anothertaskvar].done){
        TasksUndone= TasksUndone+1
      }
    }
    return of(TasksUndone)
  }

  retrieveTaskList() : Observable<task[]> {
    //throw new Error("Method not implemented.");
    //this.getTaskDoneValues()
    //this.getTaskUndoneValues()
    return of(fullListOfTasks);
  }
  retrieveTaskDetail(id: number) : Observable<task> {
    //throw new Error("Method not implemented.");
    //this.getTaskDoneValues()
    //this.getTaskUndoneValues()
    return of(fullListOfTasks.find(task => task[id] === id));
  }
  //getLengthTaskList() : number{
    //return fullListOfTasks.length;
  //}
  updateTaskList(actionTask: string) : Observable<task[]>{
    //var len : number = this.getLengthTaskList();
    fullListOfTasks.push({action: actionTask, done :false});
    //this.getTaskDoneValues()
    //this.getTaskUndoneValues()
    return of(fullListOfTasks)
  }
  changeCheckBox(task: task) : Observable<task[]> {
    if (task.done){ task.done=false}
    else{task.done=true}
    //this.getTaskDoneValues()
    //this.getTaskUndoneValues()
    console.log(this.getTaskDoneValues())
    return of(fullListOfTasks)
  }
}
