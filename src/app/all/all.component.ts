import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import { Task } from '../Interfaces/Task';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  @Input() todoArr: Task[];
  todo: string;
  @Output() todoArrEvent: EventEmitter<Task[]> = new EventEmitter<Task[]>();

  constructor() {

  }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    this.todoArr.forEach(x => {
      console.log(x);
    });
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
