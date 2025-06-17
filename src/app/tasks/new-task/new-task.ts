import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskModel } from './newTask.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Input({required:true}) userId!:string;
  // @Output() add=new EventEmitter<NewTaskModel>();
  @Output() close=new EventEmitter<void>();
  enteredTitle!: '';
  enteredSummary!: '';
  enteredDate!:'';
  //Create object for service like Dependency Injection
private tasksService=inject(TasksService)

  onCancelTask(){  
    this.close.emit();
  }

  onSubmit(){
    this.tasksService.addTask({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDate
    },this.userId);
    this.onCancelTask();
  }
}
