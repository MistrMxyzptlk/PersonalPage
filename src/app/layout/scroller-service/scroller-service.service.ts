import {Inject, Injectable} from '@angular/core';
import {ViewportScroller} from '@angular/common';
import {IIntersectionObserver, TIntersectionObserver} from '../../shared/tokens/intersection-observer.token';

@Injectable({
  providedIn: 'root'
})
export class ScrollerService implements ViewportScroller {
  private offset: [number, number] | (() => [number, number]) = [0, 0];
  private scrollRestoration: 'auto' | 'manual' = 'auto';

  constructor(
    @Inject(TIntersectionObserver) private intersectionObserver: IIntersectionObserver
  ) {
  }

  setOffset(offset: [number, number] | (() => [number, number])): void {
    this.offset = offset;
  }

  getScrollPosition(): [number, number] {
    if(!this.intersectionObserver.rootElement) return [0, 0];
    return [
      this.intersectionObserver.rootElement.offsetTop,
      this.intersectionObserver.rootElement.offsetLeft
    ];
  }

  scrollToPosition(position: [number, number]): void {
    this.intersectionObserver.rootElement?.scrollTo(...position);
  }

  scrollToAnchor(anchor: string): void {
    const a = this.intersectionObserver.rootElement?.querySelector(`#${anchor}`);
    if (!a) {
      return;
    }
    a.scrollIntoView();
    //this.intersectionObserver.rootElement?.scrollTo()
  }

  setHistoryScrollRestoration(scrollRestoration: 'auto' | 'manual'): void {
    this.scrollRestoration = scrollRestoration;
  }
}
