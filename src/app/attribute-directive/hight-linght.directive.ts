import { Directive, ElementRef, Renderer2,  HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHightLinght]'
})
export class HightLinghtDirective {

  constructor(private ele: ElementRef, private ren: Renderer2) {
    // this.ele.nativeElement.style.backgroundColor = "blue";
    this.ren.setStyle(this.ele.nativeElement, "background-color", "blue")
   }
   @HostBinding('style.backgroundColor') bgColor:string = "green"
   @HostListener('mouseenter') sukienHover()
   {
    this.ren.setStyle(this.ele.nativeElement, "background-color", "red")
   }
   @HostListener('mouseleave') sukienLeave()
   {
    this.ren.setStyle(this.ele.nativeElement, "background-color", "yellow")
   }
}
