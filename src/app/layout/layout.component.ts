import {AfterViewInit, Component, ElementRef, Inject, ViewChild} from '@angular/core';
import {IIntersectionObserver, TIntersectionObserver} from '../shared/tokens/intersection-observer.token';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements AfterViewInit {
  @ViewChild('scrollContainer', {read: ElementRef}) scrollContainer!: ElementRef;

  constructor(@Inject(TIntersectionObserver) private intersectionObserver: IIntersectionObserver) {
  }

  ngAfterViewInit(): void {
    this.intersectionObserver.rootElement = this.scrollContainer.nativeElement;
  }

}
