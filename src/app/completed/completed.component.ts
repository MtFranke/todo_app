import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Task } from '../Interfaces/Task';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  @Input() todoArr: Task[];
  @Output() todoArrCompleted: EventEmitter<Task[]> = new EventEmitter<Task[]>();

  constructor() {
  }

  ngOnInit(): void {

  }

  Remove(index: number): void {
    delete this.todoArr[index];

    const filtered = this.todoArr.filter(el => el != null);
    this.todoArr = filtered;

    this.todoArrCompleted.emit(this.todoArr);
  }

  RemoveAll(): void {
    for (let i = 0; i < this.todoArr.length; i++) {
      if (this.todoArr[i].completed) {
        delete this.todoArr[i];
      }
    }
    const filtered = this.todoArr.filter(el => el != null);
    this.todoArr = filtered;
    this.todoArrCompleted.emit(this.todoArr);
  }
}
