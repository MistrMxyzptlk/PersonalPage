import {Component, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {OnAppearDirective} from '../../../shared/directives/on-appear.directive';
import {slideInBottom, slideInLeft, slideInRight} from '../../../shared/animations/slide-in.animation';
import {zoomIn} from '../../../shared/animations/zoom-in.animation';

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
    slideInBottom(100),
    slideInRight(100),
    slideInLeft(100),
    zoomIn(.8),
  ],
})
export class FeaturesComponent {
  protected slideIn = 'out';
  @HostListener('appear')
  onAppear() {
    this.slideIn = 'in';
  }
}
