import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header-component';
import { UserComponent } from "./user/User.Component";
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from "./tasks/tasks";

@Component({
  //Standlone is true by default
  selector: 'app-root',
  // imports: [RouterOutlet, HeaderComponent, User],
  imports: [HeaderComponent, UserComponent, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-app';
  users=DUMMY_USERS;
  selectedUserId:string='u1';

get selectedUser(){
  return this.users.find(x=>x.id===this.selectedUserId)!;
}

  public OnSelectUser(id:string){
  console.log(id);
  this.selectedUserId=id;
  }
}
