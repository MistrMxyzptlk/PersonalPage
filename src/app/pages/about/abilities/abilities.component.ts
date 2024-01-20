import {Component, Input} from '@angular/core';
import {IAbility} from '../../../shared/model/ability.model';
import {AbilityComponent} from './ability/ability.component';
import {OnAppearDirective} from '../../../shared/directives/on-appear.directive';
import {Expand} from '../../../shared/animations/expand';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-abilities',
  standalone: true,
  imports: [
    AbilityComponent,
    OnAppearDirective,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './abilities.component.html',
  styleUrl: './abilities.component.scss',
  animations: [
    Expand(600)
  ]
})
export class AbilitiesComponent {
  @Input({required: true})
  public abilities!: IAbility[];

  protected abilitiesExpandDone = false;
  protected abilitiesAnimating = false;
  protected abilitiesExpanded = false;

  abilityAppeared(ability: AbilityComponent) {
    ability.animationState = true;
  }

  toggleAbilities() {
    this.abilitiesExpanded = !this.abilitiesExpanded;
  }

  onExpansionDone(event: {toState: string}) {
    if (event.toState === 'expanded')
      this.abilitiesExpandDone = true;

    this.abilitiesAnimating = false;
  }

  onExpansionStart(event: {toState: string}) {
    if (event.toState === 'initial')
      this.abilitiesExpandDone = false;

    this.abilitiesAnimating = true;
  }
}
