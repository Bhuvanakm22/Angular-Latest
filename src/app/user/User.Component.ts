import { Component, computed, EventEmitter, input, Input, output, Output, signal } from '@angular/core';
import { type User } from './user.model'
import { Card } from "../shared/card/card";
// const randomIndex=Math.floor(Math.random() * DUMMY_USERS.length)


@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './User.Component.html',
  styleUrl: './user.css'
})
export class UserComponent {

// selectedUser=DUMMY_USERS[randomIndex]

//signals
// selectedUser=signal(DUMMY_USERS[randomIndex]);

//Input decorator
@Input({required:true}) user!:User;
@Output() select=new EventEmitter<string>();
@Input({required:true}) selected!:boolean;
//input signal function
// avatar=input.required<string>();
// name=input.required<string>();
// select=output<string>();

//signals compute to track changes
imagePath = computed(()=> {
  return 'assets/users/' + this.user.avatar;
});
// get imagePath(){
//   return 'assets/users/' + this.avatar();
// }

public OnSelectUser()
{
  //Trigger state change to produce new DOM snapshot with changegd name and img
  // const randomIndex=Math.floor(Math.random() * DUMMY_USERS.length)
  // this.selectedUser=DUMMY_USERS[randomIndex]
  //signals
  //this.selectedUser.set(DUMMY_USERS[randomIndex]);
  this.select.emit(this.user.id);
}

}
