import { Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  @Input() width;
  @Input() height;

  @Output() changeWidthEvent = new EventEmitter();

  @Output() changeHeightEvent = new EventEmitter();

  @Output() changeClassEvent = new EventEmitter();


  onClassChange(value) {
    this.changeClassEvent.emit(value);
  }

  changeWidth(widthOffset) {
    this.width += widthOffset;
    console.log('szer'+this.width);
    this.changeWidthEvent.emit(this.width);
  }

  changeHeight(heightOffset) {
    this.height += heightOffset;
    console.log('wys'+this.height);
    this.changeHeightEvent.emit(this.height);
  }

}
