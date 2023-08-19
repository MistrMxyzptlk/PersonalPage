import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.scss']
})
export class SectionListComponent {
  @Input() set type(value: 'basic' | 'article') {
    this.containerClasses = `section-list-container ${value}`;
  }
  protected containerClasses: string = 'section-list-container basic';
}
