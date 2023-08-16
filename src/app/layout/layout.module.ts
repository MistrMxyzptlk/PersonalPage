import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import {MatToolbarModule} from "@angular/material/toolbar";



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent
  ],
  exports: [
    LayoutComponent
  ],
    imports: [
        CommonModule,
        MatToolbarModule
    ]
})
export class LayoutModule { }
