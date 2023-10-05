import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {IInterval} from '../../../../shared/model/interval.model';
import {SharedModule} from '../../../../shared/shared.module';

@Component({
  selector: 'app-milestone',
  standalone: true,
  imports: [CommonModule, MatIconModule, SharedModule],
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.scss']
})
export class MilestoneComponent {
  @Input() public icon?: string = 'done';
  @Input() public headline = 'Chybí nadpis!';
  @Input() public date?: IInterval<Date> | Date;
}
