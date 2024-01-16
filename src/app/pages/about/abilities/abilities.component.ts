import {Component, Input} from '@angular/core';
import {IAbility} from '../../../shared/model/ability.model';
import {AbilityComponent} from './ability/ability.component';

@Component({
  selector: 'app-abilities',
  standalone: true,
  imports: [
    AbilityComponent
  ],
  templateUrl: './abilities.component.html',
  styleUrl: './abilities.component.scss'
})
export class AbilitiesComponent {
  @Input({required: true})
  public abilities!: IAbility[];
}
