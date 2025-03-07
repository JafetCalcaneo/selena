import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appButtonAnimation]',
  standalone: true
})
export class ButtonAnimationDirective {

  constructor(private element: ElementRef) { }

  @HostListener('mousedown') onMouseDown() {
    this.element.nativeElement.style.transform = 'scale(0.9)';
  }

  @HostListener('mouseup') onMouseUp() {
    this.element.nativeElement.style.transform = 'scale(1)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.transform = 'scale(1)';
  }

}
