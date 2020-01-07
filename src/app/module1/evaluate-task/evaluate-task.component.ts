import { Component, OnInit } from '@angular/core';
import { task } from '../task';
import { Service1Service } from '../service1.service';
import { ActivatedRoute } from '@angular/router';
import { ListOfTasksComponent } from '../list-of-tasks/list-of-tasks.component';

@Component({
  selector: 'app-evaluate-task',
  templateUrl: './evaluate-task.component.html',
  styleUrls: ['./evaluate-task.component.css']
})
export class EvaluateTaskComponent implements OnInit {
  public TasksDone : number;
  public TasksUndone : number;
  constructor(
    private soloService : Service1Service
    ) { }

  ngOnInit() {
  }
  getTasksValues() : void {
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
    
  }
}
