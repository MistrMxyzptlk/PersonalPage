import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionListComponent } from './component/section-list/section-list.component';
import { SectionComponent } from './component/section/section.component';
import { FormatPipe } from './pipe/format.pipe';
import { OnAppearDirective } from './directives/on-appear.directive';
import { OnDisappearDirective } from './directives/on-disappear.directive';
import { IdDirective } from './directives/id.directive';

@NgModule({
  declarations: [
    SectionListComponent,
    SectionComponent,
    FormatPipe,
    OnDisappearDirective,
    IdDirective,
  ],
    exports: [
        SectionListComponent,
        SectionComponent,
        FormatPipe,
        OnAppearDirective,
        OnDisappearDirective,
        IdDirective
    ],
  imports: [
    CommonModule,
    OnAppearDirective,
  ]
})
export class SharedModule { }
