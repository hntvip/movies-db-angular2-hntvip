import { Directive, ElementRef, HostListener } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
@Directive({
  selector: '[appAppFontSize]'
})
export class AppFontSizeDirective {
  defaultSize = "16px";
  constructor(private element : ElementRef) { }
  
  @HostListener('mouseenter') mouseEnter(e) {
    this.changeFontSize("30px");
  }

  @HostListener('mouseleave') mouseLeave(e) {
    this.changeFontSize(this.defaultSize);
  }

  private changeFontSize(size: string){
    this.element.nativeElement.style.fontSize = size;
  }
}
