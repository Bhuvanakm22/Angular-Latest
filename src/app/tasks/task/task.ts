import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {Task } from './task.model'
import { DatePipe } from '@angular/common';
import { Card } from "../../shared/card/card";
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-task',
  imports: [DatePipe, Card],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class TaskComponent {
@Input({required:true}) task!: Task;
// @Output() complete=new EventEmitter<string>();
  //Create object for service like Dependency Injection
private tasksService=inject(TasksService)

onCompleteTask(){
 // this.complete.emit(this.task.id);
 this.tasksService.removeTasks(this.task.id);
}

}
