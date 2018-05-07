import { Directive, Renderer, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardBorder]'
})
export class CardBorderDirective {

  constructor(private render: Renderer,private element: ElementRef) { }

  @HostBinding("class.borderColor") isBorder = false;

  @HostListener('mouseover') onMouseOver(e) {
    this.isBorder = true;
  }

  @HostListener('mouseout') onMouseOut(e) {
    this.isBorder = false;
  }

}
