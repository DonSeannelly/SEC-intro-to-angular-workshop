import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users;
  editing;
  
  constructor(public userService: UserService) {
    this.loadUsers();
  }
  loadUsers(){
    this.userService.load()
    .then(data => {
      this.users = data;
    }).then(() =>{
      this.editing = new Array();
      for(let i = 0; i < this.users.length; i++) {
        this.editing[i] = false;
      }
    });
  }
  deleteUser(index) {
    this.users.splice(index, 1);
  } 
  editUser(index) {
    this.editing[index] = !this.editing[index];
  }

}
