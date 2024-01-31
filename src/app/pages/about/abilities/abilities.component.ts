import {Component, Input} from '@angular/core';
import {IAbility} from '../../../shared/model/ability.model';
import {AbilityComponent} from './ability/ability.component';
import {OnAppearDirective} from '../../../shared/directives/on-appear.directive';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {ExpanderComponent} from '../../../shared/component/expander/expander.component';

@Component({
  selector: 'app-abilities',
  standalone: true,
  imports: [
    AbilityComponent,
    OnAppearDirective,
    MatButtonModule,
    MatIconModule,
    ExpanderComponent
  ],
  templateUrl: './abilities.component.html',
  styleUrl: './abilities.component.scss',
})
export class AbilitiesComponent {
  @Input({required: true})
  public abilities!: IAbility[];

  abilityAppeared(ability: AbilityComponent) {
    ability.animationState = true;
  }
}
