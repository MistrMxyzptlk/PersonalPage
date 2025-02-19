import {Component} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {IntroductionComponent} from './introduction/introduction.component';
import {FeaturesComponent} from './features/features.component';
import {MilestonesComponent} from './milestones/milestones.component';
import {MILESTONES} from '../../shared/const/milestones.const';
import {AbilitiesComponent} from './abilities/abilities.component';
import {ABILITIES} from '../../shared/const/abilities.const';
import {ContactComponent} from './contact/contact.component';

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
    MilestonesComponent,
    AbilitiesComponent,
    ContactComponent,
  ],
    providers: []
})
export class AboutComponent {
  protected milestones = MILESTONES;
  protected abilities = ABILITIES;
}
