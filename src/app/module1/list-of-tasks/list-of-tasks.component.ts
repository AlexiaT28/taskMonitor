import { Component, OnInit } from '@angular/core';
import { task } from '../task';
import { Service1Service } from '../service1.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-of-tasks',
  templateUrl: './list-of-tasks.component.html',
  styleUrls: ['./list-of-tasks.component.css']
})
export class ListOfTasksComponent implements OnInit {

  TaskList : task[];
  //particularTask : task;

  constructor(
    private soloService : Service1Service,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.retrieveTaskList();
  }

  public retrieveTaskList() : void{
    //const id = +this.route.snapshot.paramMap.get('id');
    //this.TaskList = fullListOfTasks;
    this.soloService.retrieveTaskList().subscribe(TaskList => this.TaskList = TaskList)
  }
  public changeCheckBox(id : number) : void{
    this.soloService.changeCheckBox(id);
  }
}
