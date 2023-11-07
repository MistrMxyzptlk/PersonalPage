import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MilestoneComponent} from './milestone/milestone.component';
import {IInterval} from '../../../shared/model/interval.model';
import {SharedModule} from '../../../shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {Collapse} from '../../../shared/animations/collapse';

export interface IMilestone {
  icon?: string;
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
    Collapse,
  ]
})
export class MilestonesComponent {
  @Input() public milestones: IImportantMilestone[] = [];

  unfoldedIndex = -1;

  onAppear(component: MilestoneComponent) {
    component.appeared = 'initial';
  }

  onDisapear(component: MilestoneComponent) {
    component.appeared = 'default';
  }

  onToggleButtonClick(index: number) {
    this.milestones[index].subMilestones.map(sm => ({...sm, }))
    this.unfoldedIndex = index;
  }
}
