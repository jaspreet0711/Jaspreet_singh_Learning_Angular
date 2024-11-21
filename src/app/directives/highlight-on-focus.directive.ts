import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective {

  @Input() appHighlightOnFocus = '';
  constructor(private element: ElementRef) { }

  @HostListener('focus') onFocus() {
    this.highlight(this.appHighlightOnFocus || 'lightyellow')
  }

  @HostListener('blur') onBlur() {
    this.highlight('transparent');
  }

  private highlight(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
