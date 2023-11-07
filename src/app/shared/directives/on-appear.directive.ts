import {AfterViewInit, Directive, ElementRef, EventEmitter, Inject, Input, OnDestroy, Output} from '@angular/core';
import {IIntersectionObserver, TIntersectionObserver} from '../tokens/intersection-observer.token';

@Directive({
  selector: '[appAppear]',
  standalone: true,
})
export class OnAppearDirective implements AfterViewInit, OnDestroy {
  @Output('appAppear')
  public appear = new EventEmitter<void>();
  private observer?: IntersectionObserver;

  @Input()
  public rootElement?: HTMLElement;

  @Input()
  public rootMargin = '5px';

  @Input()
  public threshold = 0.5;

  @Input()
  public once = true;

  @Input()
  public enabled = true;

  constructor(
      private elementRef: ElementRef<HTMLElement>,
      @Inject(TIntersectionObserver) private intersectionObserver: IIntersectionObserver
  ) { }

  ngAfterViewInit(): void {
    const options = {
      root: this.rootElement ? this.rootElement : this.intersectionObserver.rootElement,
      rootMargin: this.rootMargin,
      threshold: this.threshold,
    };

    this.observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && this.enabled) {
          this.appear.next();
          if (this.once) {
            this.observer?.disconnect();
          }
        }
      }
    }, options);

    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
