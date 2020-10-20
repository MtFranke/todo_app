import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Task } from '../Interfaces/Task';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {

  @Input() todoArr: Task[];
  todo: string;
  @Output() todoArrEvent: EventEmitter<Task[]> = new EventEmitter<Task[]>();

  constructor() { }

  ngOnInit(): void {
  }

  AddTask(): void{
    if (this.todo !== ''){
      this.todoArr.push({todo: this.todo, completed: false});
      this.todoArrEvent.emit(this.todoArr);
    }
  }
  TaskCompleted(i: number): void{
    if (this.todoArr[i].completed === true)
    {
      this.todoArr[i].completed = false;
      this.todoArrEvent.emit(this.todoArr);

    }else {
      this.todoArr[i].completed = true;
      this.todoArrEvent.emit(this.todoArr);

    }
  }


}
