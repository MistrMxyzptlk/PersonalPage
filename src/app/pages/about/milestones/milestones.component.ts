import {Component, ElementRef, Inject, Input, QueryList, ViewChildren} from '@angular/core';
import {CommonModule, ViewportScroller} from '@angular/common';
import {MilestoneComponent} from './milestone/milestone.component';
import {IInterval} from 'src/app/shared/model/interval.model';
import {SharedModule} from 'src/app/shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {Collapse, ECollapseAnimation} from 'src/app/shared/animations/collapse';
import {IdDirective} from 'src/app/shared/directives/id.directive';
import {ScrollerService} from 'src/app/layout/scroller-service/scroller-service.service';
import {first, tap} from 'rxjs';

export interface IMilestone {
  icon?: string;
  svgIcon?: string;
  headline: string;
  date?: IInterval<Date> | Date;
  text: string | null;
}

export interface IImportantMilestone extends IMilestone {
  subMilestones: IMilestone[];
}

@Component({
  selector: 'app-milestones',
  standalone: true,
  imports: [CommonModule, MilestoneComponent, SharedModule, MatButtonModule, MatIconModule],
  templateUrl: './milestones.component.html',
  styleUrls: ['./milestones.component.scss'],
  animations: [
    Collapse(ECollapseAnimation.ANIMATE_IN),
  ]
})
export class MilestonesComponent {
  @Input() public milestones: IImportantMilestone[] = [];

  @ViewChildren(IdDirective) subMilestones?: QueryList<IdDirective<MilestoneComponent>>;
  @ViewChildren('scrollTargetTop') scrollTargetsTop?: QueryList<ElementRef<HTMLDivElement>>;
  @ViewChildren('scrollTargetBottom') scrollTargetsBottom?: QueryList<ElementRef<HTMLDivElement>>;

  unfoldedIndex = -1;

  constructor(
    @Inject(ViewportScroller) private scrollerService: ScrollerService
  ) {
  }

  onAppear(component: MilestoneComponent) {
    component.appeared = 'initial';
  }

  onToggleButtonClick(index: number) {
    this.scrollTargetsTop?.get(index)?.nativeElement.scrollIntoView({behavior: 'smooth'});
    this.subMilestones?.filter(sm => sm.appId == index)
      .map(sm => sm.component)
      .forEach(sm => {
        if (sm) {
          sm.appeared = 'default'
        }
      })
    this.scrollerService.scrollEndEvent$.pipe(
      first(),
      tap(() => {
          this.unfoldedIndex = index;
      })
    ).subscribe();
  }

  scrollIntoView(index: number, event: {toState: string}) {
    if (event.toState !== 'in' || index === 0) return;
    this.scrollTargetsTop?.get(index)?.nativeElement.scrollIntoView({behavior: 'instant'});
  }
}
