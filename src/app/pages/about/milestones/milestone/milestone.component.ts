import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {IInterval} from '../../../../shared/model/interval.model';
import {SharedModule} from '../../../../shared/shared.module';
import {slideIn, SlideInAnimationsStateName} from '../../../../shared/animations/slide-in.animation';
import {zoomIn, ZoomInAnimationStateName} from '../../../../shared/animations/zoom-in.animation';
import {IAnimationState} from '../../../../shared/model/animation-state.model';

@Component({
  selector: 'app-milestone',
  standalone: true,
  imports: [CommonModule, MatIconModule, SharedModule],
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.scss'],
  animations: [
    slideIn(256, 100),
    zoomIn(0.5)
  ]
})
export class MilestoneComponent {
  @Input() public icon?: string = 'done';
  @Input() public headline = 'Chybí nadpis!';
  @Input() public date?: IInterval<Date> | Date;
  @Input() public set appeared(value: 'initial') {
    this.animationStates = this.animationStates.map(() => ({state: value}));
  }

  protected animationStates: IAnimationState<SlideInAnimationsStateName | ZoomInAnimationStateName>[] = [
    {state: 'zoomOut'},
    {state: 'right'  },
  ];
}
