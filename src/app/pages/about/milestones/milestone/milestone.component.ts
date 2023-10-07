import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {IInterval} from '../../../../shared/model/interval.model';
import {SharedModule} from '../../../../shared/shared.module';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-milestone',
  standalone: true,
  imports: [CommonModule, MatIconModule, SharedModule],
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.scss'],
  animations: [
    trigger('text-appeared', [
      state('hidden', style({
        left: '256px',
        opacity: 0,
      })),
      state('appeared', style({
        left: '0px',
        opacity: 1,
      })),
      transition('hidden => appeared', [
        animate('.4s ease-out'),
      ]),
    ]),
    trigger('icon-appeared', [
      state('hidden', style({
        transform: 'scale(0.5)',
        opacity: 0,
      })),
      state('appeared', style({
        transform: 'scale(1)',
        opacity: 1,
      })),
      transition('hidden => appeared', [
        animate('.4s ease-out'),
      ])
    ]),
  ]
})
export class MilestoneComponent {
  @Input() public icon?: string = 'done';
  @Input() public headline = 'Chybí nadpis!';
  @Input() public date?: IInterval<Date> | Date;
  @Input() public appeared: 'hidden' | 'appeared' = 'hidden';
}
