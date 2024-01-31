import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {GoogleMapsModule} from '@angular/google-maps';
import {OnAppearDirective} from '../../../shared/directives/on-appear.directive';
import {slideIn} from '../../../shared/animations/slide-in.animation';
import {zoomIn} from '../../../shared/animations/zoom-in.animation';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    MatIconModule,
    GoogleMapsModule,
    OnAppearDirective,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [
    slideIn(100, 0),
    zoomIn(0.5)
  ]
})
export class ContactComponent {
  options: google.maps.MapOptions = {
    center: {lat: 50.61847523469652, lng: 13.764410748775292},
    zoom: 15,
    clickableIcons: false,
    disableDefaultUI: true,
    keyboardShortcuts: false,
    gestureHandling: 'none',
    fullscreenControl: true,
  };

  appeared = false;

  onAppear() {
    this.appeared = true;
  }
}
