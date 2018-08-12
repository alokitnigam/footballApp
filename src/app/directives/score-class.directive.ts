import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScoreClass]'
})
export class ScoreClassDirective {

  constructor(public elementRef: ElementRef, public renderer: Renderer2) { 

  }

  ngOnInit() {
    console.log(this.elementRef.nativeElement.innerText);
    // if(this.elementRef.nativeElement.innerText.length > 0){
    //   this.renderer.addClass(this.elementRef.nativeElement, 'score');
    // }
  }

}
