import {Component, Input} from '@angular/core';
import {IAbility} from '../../../../shared/model/ability.model';
import {MatIconModule} from '@angular/material/icon';
import {slideIn} from '../../../../shared/animations/slide-in.animation';

@Component({
  selector: 'app-ability',
  standalone: true,
    imports: [
        MatIconModule
    ],
  templateUrl: './ability.component.html',
  styleUrl: './ability.component.scss',
  animations: [
    slideIn(256, 100),
  ]
})
export class AbilityComponent {
  @Input({required: true})
  public ability!: IAbility;

  public animationState = false;
}
