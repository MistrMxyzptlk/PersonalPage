import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {SharedModule} from '../../../shared/shared.module';
import {slideIn, SlideInAnimationsStateName} from '../../../shared/animations/slide-in.animation';
import {IAnimationState} from '../../../shared/model/animation-state.model';

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
  animationStates: IAnimationState<SlideInAnimationsStateName>[] = [
    {state: 'left'},
    {state: 'right'},
  ]
  protected onAppear() {
    this.animationStates = this.animationStates.map(() => ({state: 'initial'}));
  }
}
