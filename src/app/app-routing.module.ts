import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'about',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(c => c.AboutComponent),
  },
  {
    path: 'blog',
    loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule),
  },
  {
    path: 'career',
    loadChildren: () => import('./pages/career/career.module').then(m => m.CareerModule),
  },
  {
    path: 'fit',
    loadChildren: () => import('./pages/fit/fit.module').then(m => m.FitModule),
  },
  {
    path: '*',
    pathMatch: 'full',
    redirectTo: 'not-found',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
