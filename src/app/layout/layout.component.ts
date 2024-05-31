import {AfterViewInit, Component, ElementRef, Inject, ViewChild} from '@angular/core';
import {IIntersectionObserver, TIntersectionObserver} from '../shared/tokens/intersection-observer.token';
import {ViewportScroller} from '@angular/common';
import {ScrollerService} from 'src/app/layout/scroller-service/scroller-service.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements AfterViewInit {
  @ViewChild('scrollContainer', {read: ElementRef}) scrollContainer!: ElementRef;

  constructor(
    @Inject(TIntersectionObserver) private intersectionObserver: IIntersectionObserver,
    @Inject(ViewportScroller) private scrollerService: ScrollerService
  ) {
  }

  ngAfterViewInit(): void {
    this.intersectionObserver.rootElement = this.scrollContainer.nativeElement;
  }

  scrollEnd(e: Event) {
    this.scrollerService.scrollEndEvent$.next(e);
  }
}
