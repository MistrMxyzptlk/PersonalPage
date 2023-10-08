import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionListComponent } from './section-list/section-list.component';
import { SectionComponent } from './section/section.component';
import { FormatPipe } from './pipe/format.pipe';
import { OnAppearDirective } from './directives/on-appear.directive';

@NgModule({
  declarations: [
    SectionListComponent,
    SectionComponent,
    FormatPipe,
  ],
  exports: [
    SectionListComponent,
    SectionComponent,
    FormatPipe,
    OnAppearDirective
  ],
  imports: [
    CommonModule,
    OnAppearDirective,
  ]
})
export class SharedModule { }
