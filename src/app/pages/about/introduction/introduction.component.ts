import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {SharedModule} from '../../../shared/shared.module';
import {slideInLeft, slideInRight} from '../../../shared/animations/slide-in.animation';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    SharedModule
  ],
  animations: [slideInLeft(100), slideInRight(100)]
})
export class IntroductionComponent {
  protected slideIn = 'out';
  protected onAppear() {
    this.slideIn = 'in';
  }
}
