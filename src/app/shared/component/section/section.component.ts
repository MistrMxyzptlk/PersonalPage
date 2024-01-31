import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  @Input() set type(value: 'basic' | 'article') {
    this.containerClasses = `section-container ${value}`;
  }
  protected containerClasses = 'section-container basic';
}
