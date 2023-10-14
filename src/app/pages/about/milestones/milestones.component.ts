import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MilestoneComponent} from './milestone/milestone.component';
import {IInterval} from '../../../shared/model/interval.model';
import {SharedModule} from '../../../shared/shared.module';

export interface IMilestone {
  icon?: string;
  headline: string;
  date?: IInterval<Date> | Date;
  text: string | null;
  important: boolean;
}

@Component({
  selector: 'app-milestones',
  standalone: true,
    imports: [CommonModule, MilestoneComponent, SharedModule],
  templateUrl: './milestones.component.html',
  styleUrls: ['./milestones.component.scss']
})
export class MilestonesComponent {
  @Input() public milestones: IMilestone[] = [];

  onAppear(component: MilestoneComponent) {
    component.appeared = 'initial';
  }
}
