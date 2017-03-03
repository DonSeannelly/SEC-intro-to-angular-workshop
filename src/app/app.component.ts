import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users;

  constructor(public userService: UserService) {
    this.loadUsers();
  }
  loadUsers(){
    this.userService.load()
    .then(data => {
      this.users = data;
    });
  }
  deleteUser(index) {
    this.users.splice(index, 1);
  } 

}
