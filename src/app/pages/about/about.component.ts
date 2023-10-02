import { Component } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [
    SharedModule,
    MatGridListModule,
    MatCardModule
  ]
})
export class AboutComponent {

}
