import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBackgroundSet]'
})
export class BackgroundSetDirective {
  
  colorArray = [
    '#F44336',
    '#E91E63',
    '#9C27B0',
    '#673AB7',
    '#3F51B5',
    '#2196F3',
    '#7C4DFF',
    '#009688',
    '#4CAF50',
    '#8BC34A',
    '#CDDC39',
    '#5d5d5d',
    '#FF9800',
    '#FF5722'
  ]

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { 

  }

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.getRandomColor())
  }
  
  getRandomColor(){
    let colorArray = [...this.colorArray];
    return colorArray[Math.floor((Math.random() * 13) + 1)];
  }

}
