import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ListOfTasksComponent } from './list-of-tasks/list-of-tasks.component';
import { EvaluateTaskComponent } from './evaluate-task/evaluate-task.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';



@NgModule({
  imports: [CommonModule],
  declarations: [ListOfTasksComponent, EvaluateTaskComponent, TaskDetailComponent, CreateTaskComponent],
  exports: [ListOfTasksComponent, EvaluateTaskComponent, TaskDetailComponent, CreateTaskComponent],
  bootstrap: [ListOfTasksComponent, EvaluateTaskComponent, TaskDetailComponent, CreateTaskComponent]
})

//other compo to implement : CreateTaskComponent
export class Module1Module { }
