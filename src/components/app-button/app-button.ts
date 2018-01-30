import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-button',
  template: `
    <button ion-button (click)="onHandle()">
    <ng-content></ng-content>
    </button>
  `,
  styles:[`
    button {
      background: white;
      color: black;
      border: 2px solid #A1DB70;
      -webkit-box-shadow: none;
    }
    `]
})
export class AppButtonComponent {
  @Output() myClick = new EventEmitter();
  constructor() {}

  onHandle() {
    this.myClick.emit()
  }
}
