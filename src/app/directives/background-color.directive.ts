import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]',
  standalone: true
})
export class BackgroundColorDirective {

  @Input() appBackgroundColor = '';

  constructor(private element: ElementRef) { }

  @HostListener('mouseover') onMouseEnter() {
    this.highlight(this.appBackgroundColor || 'lightgrey');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }


  private highlight(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
