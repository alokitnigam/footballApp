import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScoreClass]'
})
export class ScoreClassDirective {

  constructor(public elementRef: ElementRef, public renderer: Renderer2) { 

  }

  ngOnInit() {
  }

}
