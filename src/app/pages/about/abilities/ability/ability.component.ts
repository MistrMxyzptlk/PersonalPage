import {Component, Input} from '@angular/core';
import {IAbility} from '../../../../shared/model/ability.model';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-ability',
  standalone: true,
    imports: [
        MatIconModule
    ],
  templateUrl: './ability.component.html',
  styleUrl: './ability.component.scss'
})
export class AbilityComponent {
  @Input({required: true})
  public ability!: IAbility;
}
