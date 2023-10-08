import {AfterViewInit, Directive, ElementRef, EventEmitter, OnDestroy, Output} from '@angular/core';

@Directive({
  selector: '[appAppear]',
  standalone: true,
})
export class OnAppearDirective implements AfterViewInit, OnDestroy {
  @Output('appAppear')
  public appear = new EventEmitter<void>();
  private observer?: IntersectionObserver;

  constructor(private elementRef: ElementRef<HTMLElement>) { }

  ngAfterViewInit(): void {
    const options = {
      root: null,
      rootMargin: '5px',
      threshold: .5,
    };

    this.observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          this.appear.next();
          this.observer?.disconnect();
        }
      }
    }, options);

    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
