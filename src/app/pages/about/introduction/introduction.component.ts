import {Component, Inject} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {SharedModule} from '../../../shared/shared.module';
import {slideIn, SlideInAnimationsStateName} from '../../../shared/animations/slide-in.animation';
import {IAnimationState} from '../../../shared/model/animation-state.model';
import {ViewportScroller} from '@angular/common';
import {ScrollerService} from '../../../layout/scroller-service/scroller-service.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    SharedModule
  ],
  animations: [
    slideIn(100, 100)
  ]
})
export class IntroductionComponent {

  constructor(
    @Inject(ViewportScroller) private viewportScroller: ScrollerService
  ) {
  }

  animationStates: IAnimationState<SlideInAnimationsStateName>[] = [
    {state: 'left'},
    {state: 'right'},
  ]

  protected onAppear() {
    this.animationStates = this.animationStates.map(() => ({state: 'initial'}));
  }

  onContactButtonClicked() {
    this.viewportScroller.scrollToAnchor('contact', true);
  }
}
