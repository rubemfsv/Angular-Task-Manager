import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[finishedTask]',
})
export class FinishedTaskDirective implements OnInit {
  @Input() finishedTask: boolean;

  constructor(private element: ElementRef) {}

  ngOnInit() {
    if (this.finishedTask) {
      this.element.nativeElement.style.textDecoration = 'line-through';
    }
  }
}
