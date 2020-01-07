import { Component, OnInit } from '@angular/core';
import { task } from '../task';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  newtask : task[];
  constructor(private soloService : Service1Service) { }

  ngOnInit() {
  }
  /*createNewTask(todo :string){
    this.newtask.action = todo;
    this.newtask.done = false;
    this.newtask.id = fullListOfTasks.length;
    //communication avec service, ajoute a la liste de taches
    //meth add a implementer
  }*/
  //getTaskList(): void {
    //this.soloService.getTasksList().subscribe(newtask => this.newtask = newtask);
  //}
  saveTask(action : string): void {
    //if (!action) { return;}
    this.soloService.updateTaskList(action);
  }
}
