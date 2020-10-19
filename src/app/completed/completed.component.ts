import {Component, Input, OnInit} from '@angular/core';
import { Task } from '../Interfaces/Task';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  @Input() todoArr: Task[];
  todoCompleted: Task[];
  constructor() { }

  ngOnInit(): void {

    this.todoCompleted = [];
    for (let i = 0; i < this.todoArr.length; i++) {
      if (this.todoArr[i].completed === true)
      {
          this.todoCompleted.push(this.todoArr[i]);
      }
    }
  }

}
