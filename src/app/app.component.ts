import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';
  @Input() allVisible: boolean;
  @Input() activeVisible: boolean;
  @Input() completedVisible: boolean;

  constructor() {
    this.allVisible = true;
    this.completedVisible = false;
    this.activeVisible = false;
  }

  LogIt(val): void{
    this.activeVisible = true;
    this.completedVisible = false;
    this.allVisible = false;
  }
  ShowCompleted(val): void{
    this.activeVisible = false;
    this.completedVisible = true;
    this.allVisible = false;
  }
  ShowAll(val): void{
    this.activeVisible = false;
    this.completedVisible = false;
    this.allVisible = true;
  }




}
