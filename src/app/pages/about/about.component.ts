import { Component } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [
    SharedModule
  ]
})
export class AboutComponent {

}
