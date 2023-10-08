import {Component, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {OnAppearDirective} from '../../../shared/directives/on-appear.directive';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatIconModule],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
  hostDirectives: [{
    directive: OnAppearDirective,
    outputs: ['appAppear: appear']
  }],
  animations: [
    trigger('slideInBottom', [
      state('in', style({
        top: 0,
        opacity: 1,
      })),
      state('out', style({
        top: '100px',
        opacity: 0,
      })),
      transition('out => in', [
        animate('.4s ease-out'),
      ]),
    ]),
  ],
})
export class FeaturesComponent {
  protected slideIn = 'out';
  @HostListener('appear')
  onAppear() {
    this.slideIn = 'in';
  }
}
