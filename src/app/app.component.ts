import {Component, Input, OnInit} from '@angular/core';
import { Task } from './Interfaces/Task';

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
  todoArr: Task[];

  constructor() {
    this.allVisible = true;
    this.completedVisible = false;
    this.activeVisible = false;

    this.todoArr = [];
    this.todoArr.push({todo: 'Do coding challenges1!', completed: false});
    this.todoArr.push({todo: 'Do coding challenges2!', completed: false});
    this.todoArr.push({todo: 'Do coding challenges3!', completed: false});
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

  Update(val: Task[]): void{
  this.todoArr = val;
  }



}
