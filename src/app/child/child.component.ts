import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() messageFromParent?: string;
  @Output() eventMessage: EventEmitter<string> = new EventEmitter<string>();
  count: number = 0;
  public emitMessageToParent() {
    this.eventMessage.emit('message from child')
  }

  updateCount() {
    this.count = this.count + 10 //  this.count += 10;

  }
}
