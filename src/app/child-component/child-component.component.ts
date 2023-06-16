import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {
  @Output() messageEvent: EventEmitter<string> = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('Hello from child component!');
  }
}
