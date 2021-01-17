import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NG ToDo';

  add = (x: number, y: number) => {
    return x+y
  }

  constructor(){
    console.log(this.add(1, 5))
  }

}
