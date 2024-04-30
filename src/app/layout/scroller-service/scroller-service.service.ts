import {Inject, Injectable} from '@angular/core';
import {ViewportScroller} from '@angular/common';
import {IIntersectionObserver, TIntersectionObserver} from '../../shared/tokens/intersection-observer.token';

@Injectable()
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
      this.intersectionObserver.rootElement.scrollLeft,
      this.intersectionObserver.rootElement.scrollTop,
    ];
  }

  scrollToPosition(position: [number, number]): void {
    this.intersectionObserver.rootElement?.scrollTo(...position);
  }

  scrollToAnchor(anchor: string, smooth: boolean = false): void {
    const a = this.intersectionObserver.rootElement?.querySelector(`#${anchor}`)?.getBoundingClientRect();
    if (!a) {
      return;
    }
    const offset = (typeof this.offset === 'function') ? this.offset() : this.offset;
    const left = a.left - (this.intersectionObserver.rootElement?.getBoundingClientRect()?.left || 0) + offset[0];
    const top = a.top - (this.intersectionObserver.rootElement?.getBoundingClientRect()?.top || 0) + offset[1];
    this.intersectionObserver.rootElement?.scrollTo({
      top, left, behavior: smooth ? 'smooth' : 'instant',
    });
  }

  setHistoryScrollRestoration(scrollRestoration: 'auto' | 'manual'): void {
    // console.log(scrollRestoration);
    this.scrollRestoration = scrollRestoration;
  }
}
