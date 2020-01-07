import { Component, OnInit } from '@angular/core';
import { task } from '../task';
import { Service1Service } from '../service1.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  particularTask : task;

  constructor(
    private soloService : Service1Service,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.retrieveTaskDetail();
  }

  retrieveTaskDetail() : void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.soloService.retrieveTaskDetail(id).subscribe(task => this.particularTask = task)
  }
}
