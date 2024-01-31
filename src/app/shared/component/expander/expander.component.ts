import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {Expand} from '../../animations/expand';

@Component({
  selector: 'app-expander',
  standalone: true,
    imports: [
        MatButtonModule,
        MatIconModule
    ],
  templateUrl: './expander.component.html',
  styleUrl: './expander.component.scss',
  animations: [
    Expand(600)
  ]
})
export class ExpanderComponent {
  protected expanded = false;
  protected expanding = false;
  protected expanderState = false;

  toggle() {
    this.expanderState = !this.expanderState;
  }

  onExpansionDone(event: {toState: string}) {
    if (event.toState === 'expanded')
      this.expanded = true;

    this.expanding = false;
  }

  onExpansionStart(event: {toState: string}) {
    if (event.toState === 'initial')
      this.expanded = false;

    this.expanding = true;
  }
}
