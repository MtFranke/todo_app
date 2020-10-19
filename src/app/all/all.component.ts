import { Component, OnInit } from '@angular/core';
import { Task } from '../Interfaces/Task';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  todoArr: Task[];
  todo: string;

  constructor() {
    this.todoArr = [];
    this.todoArr.push({todo: 'Do coding challenges1!', completed: false});
    this.todoArr.push({todo: 'Do coding challenges2!', completed: false});
    this.todoArr.push({todo: 'Do coding challenges3!', completed: false});
  }

  ngOnInit(): void {
  }
  AddTask(): void{
    if (this.todo !== ''){
      this.todoArr.push({todo: this.todo, completed: false});
    }
  }
  TaskCompleted(i: number): void{
    if (this.todoArr[i].completed === true)
    {
      this.todoArr[i].completed = false;
    }else {
      this.todoArr[i].completed = true;
    }
  }

}
