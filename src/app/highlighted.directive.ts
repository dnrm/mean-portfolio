import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {

  constructor(public element: ElementRef) {
  }

  ngOnInit() {
    let el = this.element.nativeElement;
    el.style.fontWeight = 'bold';
    el.innerText = el.innerText.toUpperCase();
  }

}
