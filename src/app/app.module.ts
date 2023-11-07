import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {LayoutModule} from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {TIntersectionObserver} from './shared/tokens/intersection-observer.token';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: TIntersectionObserver,
      useValue: { rootElement: null },
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
