import {AfterViewInit, Directive, ElementRef, EventEmitter, Inject, Input, OnDestroy, Output} from '@angular/core';
import {IIntersectionObserver, TIntersectionObserver} from '../tokens/intersection-observer.token';

@Directive({
  selector: '[appDisappear]'
})
export class OnDisappearDirective implements AfterViewInit, OnDestroy {
  @Output('appDisappear')
  public disappear = new EventEmitter<void>();
  private observer?: IntersectionObserver;

  @Input()
  public rootElement?: HTMLElement;

  @Input()
  public rootMargin = '5px';

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
      threshold: 0.1,
    };

    this.observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        console.log(entry.intersectionRatio);
        if (!entry.isIntersecting && this.enabled) {
          this.disappear.next();
        }
      }
    }, options);

    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

}
