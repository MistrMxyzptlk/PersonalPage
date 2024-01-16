import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatRippleModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {AppRoutingModule} from '../app-routing.module';
import {TIntersectionObserver} from '../shared/tokens/intersection-observer.token';



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
    MatToolbarModule,
    MatRippleModule,
    NgOptimizedImage,
    MatButtonModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: TIntersectionObserver,
      useValue: { rootElement: null },
    }
  ]
})
export class LayoutModule { }
