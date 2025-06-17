import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task";
import { NewTask } from "./new-task/new-task";
import { type NewTaskModel } from './new-task/newTask.model';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
@Input({required:true}) name!:string;
@Input({required:true}) userId!:string;
isAddTask=false;

//Dependency injection
constructor(private tasksService:TasksService)
{
  
}

get selectedUserTasks(){
  // this.isAddTask=false;
  return this.tasksService.getUserTasks(this.userId);
}

OnCompleteTask(id:string){
  
}

onStartAddTask(){
  this.isAddTask=true;
}
onCloseAddTask(){
  this.isAddTask=false;
}


// onAddNewTask(taskData:NewTaskModel){
//   this.tasksService.addTask(taskData,this.userId)
//   this.isAddTask=false;
//   }
}
