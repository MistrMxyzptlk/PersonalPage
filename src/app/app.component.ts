import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {ICONS} from './shared/const/icons.const';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'PersonalPage';

  constructor(
    private registry: MatIconRegistry,
    private sanitizer: DomSanitizer,
  ) {
  }

  ngOnInit(): void {
    for (const icon of ICONS) {
      this.registry.addSvgIcon(icon.name, this.sanitizer.bypassSecurityTrustResourceUrl(`assets/images/${icon.url}`));
    }
    this.registry.setDefaultFontSetClass('material-symbols-outlined')
  }
}
