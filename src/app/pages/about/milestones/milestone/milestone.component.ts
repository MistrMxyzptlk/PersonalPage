import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {IInterval} from '../../../../shared/model/interval.model';
import {SharedModule} from '../../../../shared/shared.module';
import {slideInRight} from '../../../../shared/animations/slide-in.animation';
import {zoomIn} from '../../../../shared/animations/zoom-in.animation';

@Component({
  selector: 'app-milestone',
  standalone: true,
  imports: [CommonModule, MatIconModule, SharedModule],
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.scss'],
  animations: [
    slideInRight(256),
    zoomIn(0.5)
  ]
})
export class MilestoneComponent {
  @Input() public icon?: string = 'done';
  @Input() public headline = 'Chybí nadpis!';
  @Input() public date?: IInterval<Date> | Date;
  @Input() public appeared: 'in' | 'out' = 'out';
}
