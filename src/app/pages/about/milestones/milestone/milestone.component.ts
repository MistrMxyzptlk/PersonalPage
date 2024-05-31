import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {IInterval} from 'src/app/shared/model/interval.model';
import {SharedModule} from 'src/app/shared/shared.module';
import {slideIn, SlideInAnimationsStateName} from 'src/app/shared/animations/slide-in.animation';
import {zoomIn, ZoomInAnimationStateName} from 'src/app/shared/animations/zoom-in.animation';
import {IAnimationState} from 'src/app/shared/model/animation-state.model';

@Component({
  selector: 'app-milestone',
  standalone: true,
  imports: [CommonModule, MatIconModule, SharedModule],
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.scss'],
  animations: [
    slideIn(150, 100),
    zoomIn(0.5)
  ]
})
export class MilestoneComponent {
  @Input() public icon?: string;
  @Input() public svgIcon?: string;
  @Input() public headline = 'Chybí nadpis!';
  @Input() public date?: IInterval<Date> | Date;
  @Input() public set appeared(value: 'initial' | 'default') {
    if (value === 'default') {
      this.resetAnimations();
      return;
    }
    this.animationStates = this.animationStates.map(() => ({state: value}));
  }

  protected animationStates: IAnimationState<SlideInAnimationsStateName | ZoomInAnimationStateName>[] = [
    {state: 'zoomOut'},
    {state: 'right'  },
  ];

  protected resetAnimations() {
    this.animationStates = [
      {state: 'zoomOut'},
      {state: 'right'}
    ];
  }
}
