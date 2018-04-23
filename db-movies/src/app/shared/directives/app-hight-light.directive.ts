import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHightLight]'
})
export class AppHightLightDirective {

  constructor(private e: ElementRef) { 
  }
  
  @HostListener('mouseenter') mouseenter(e) {
    this.hightLight("yellow");
  }

  @HostListener('mouseleave') mouseleave(e){
    this.hightLight(null);
  }

  private hightLight(color : string) {
    this.e.nativeElement.style.color = color;
  }
}
