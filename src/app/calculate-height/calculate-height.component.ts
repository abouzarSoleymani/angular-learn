import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-calculate-height',
  standalone: true,
  imports: [],
  templateUrl: './calculate-height.component.html',
  styleUrl: './calculate-height.component.css'
})
export class CalculateHeightComponent {
  @Input() height?: number;
  @Output() sum: EventEmitter<number> = new EventEmitter()
  onClick(): void {
    this.sum.emit(this.height)
  }


}
