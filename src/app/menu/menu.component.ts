import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

 @Output() eventEmitterAll: EventEmitter<boolean> = new EventEmitter<boolean>();
 @Output() eventEmitterActive: EventEmitter<boolean> = new EventEmitter<boolean>();
 @Output() eventEmitterCompleted: EventEmitter<boolean> = new EventEmitter<boolean>();

  allVisible: boolean;
  activeVisible: boolean;
  completedVisible: boolean;

  constructor() { }

  ngOnInit(): void {
    this.allVisible = true;
    this.completedVisible = false;
    this.activeVisible = false;
  }

  EmitAllVisible(): void {
    this.allVisible = !this.allVisible;
    this.eventEmitterAll.emit(this.allVisible);
  }
  EmitActiveVisible(): void{
    this.activeVisible = !this.activeVisible;
    this.eventEmitterActive.emit(this.activeVisible);
  }
  EmitCompletedVisible(): void{
    this.completedVisible = !this.completedVisible;
    this.eventEmitterCompleted.emit(this.completedVisible);
  }

}
