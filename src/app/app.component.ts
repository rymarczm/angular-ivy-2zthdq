import { Component, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  @ViewChild('figureId', {static: false}) figure: ElementRef;
  
  width = 100;
  height = 100;
  currentClass = 'gradient-multicolor';

  changeWidthDisplay(w) {
    console.log('odbieram szer'+w);
    this.width = w;
    console.log(this.width+"px");

//    this.figure.nativeElement.width = this.width+"px";
    
  }
  changeHeightDisplay(h) {
    console.log('odbiera wys'+h);
    this.height = h;
    console.log(this.height+"px");
 //   this.figure.nativeElement.style = this.getFigureStyle();

  }

  changeClassDisplay(cl) {
    this.currentClass = cl;
 //   this.figure.nativeElement.style = this.getFigureStyle();

  }


  getFigureStyle() {
    let styles = {
      'width': this.width+'px',
      'height': this.height+'px',
      'animation': 'rotateMe 2s linear infinite',
      'border-radius': '100%'
    };
    return styles;
  }

}
