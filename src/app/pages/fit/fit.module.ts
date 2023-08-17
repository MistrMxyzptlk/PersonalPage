import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FitComponent } from './fit.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: FitComponent,
  }
];

@NgModule({
  declarations: [
    FitComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class FitModule { }
