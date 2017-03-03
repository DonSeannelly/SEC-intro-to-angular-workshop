import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  toggled = false;

  textChanger() {
    if(this.toggled) {
      this.title = "app works!";
    }
    else {
      this.title = "We changed the text!";
    }
    this.toggled = !this.toggled;
  }
}
