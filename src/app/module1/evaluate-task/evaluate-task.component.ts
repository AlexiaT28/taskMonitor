import { Component, OnInit } from '@angular/core';
import { task } from '../task';
import { Service1Service } from '../service1.service';
import { ActivatedRoute } from '@angular/router';
import { ListOfTasksComponent } from '../list-of-tasks/list-of-tasks.component';
import { workValues } from '../workValues';

@Component({
  selector: 'app-evaluate-task',
  templateUrl: './evaluate-task.component.html',
  styleUrls: ['./evaluate-task.component.css']
})
export class EvaluateTaskComponent implements OnInit {
  //TaskList : task[]; //public 
  tasksUndone : number;
  tasksDone : number;
  thisIsATask : workValues;
  
  constructor(
    private soloService : Service1Service) { }

  ngOnInit() {
    //this.getTaskDoneValues();
    //this.getTaskUndoneValues();
    this.getWorkingValues()
  }
////////////////////////////////////REMPLACE PAR GETWORKINGVALUES()
  public getTaskDoneValues() : void {
    this.soloService.getTaskDoneValues().subscribe(TasksDone => this.tasksDone = TasksDone)
    //console.log(this.tasksDone)
  }
  public getTaskUndoneValues() : void {
    this.soloService.getTaskUndoneValues().subscribe(TasksUndone => this.tasksUndone = TasksUndone)
    //console.log(this.tasksUndone)
  }
///////////////////////////////////
  
  public getWorkingValues() : void {
    this.soloService.getWorkingValues().subscribe(thisIsATask => this.thisIsATask = thisIsATask)
    //console.log(this.thisIsATask.TasksDone)
    //console.log(this.thisIsATask.TasksUndone)
  }

    
    

    //const list = this.soloService.retrieveTaskList()   //NO METHOD to count item in observable<task[]>
    //for (var i=0; i<imax; i++) {
      //if (list[i].done==true){
        //this.TasksDone +=1;
      //} else {
        //this.TasksUndone +=1;
      //}
    //}
    //this.soloService.getTasksValues().subscribe(TasksDone => TasksDone = TasksDone);
    //this.soloService.getTasksValues().subscribe(TasksUndone => TasksUndone = TasksUndone);   
    
    //var imax = ListOfTasksComponent.length     //another try another fail

    /** .subscribe(this.TaskList =>
      this.TaskList.forEach(task => {
        if (task.done===true){
          this.TasksDone+=1;
        }*/
    
  
}
