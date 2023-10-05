import {Component} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {IntroductionComponent} from './introduction/introduction.component';
import {FeaturesComponent} from './features/features.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
    imports: [
        SharedModule,
        MatGridListModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        IntroductionComponent,
        FeaturesComponent,
    ],

})
export class AboutComponent {

}
