import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUppercase]'
})
export class UppercaseDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onEnter() {
    this.tranforsm('uppercase');
  }

  @HostListener('mouseleave') onLeave() {
    this.tranforsm(null);
  }

  private tranforsm(textTransform: string) {
    this.el.nativeElement.style['text-transform'] = textTransform;
  }
}
