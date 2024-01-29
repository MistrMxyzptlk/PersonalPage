import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BlogComponent} from './blog.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
  }, {
    path: 'list',
    loadComponent: () => import('./blogs/blogs.component').then(c => c.BlogsComponent),
  }, {
    path: 'read/:id',
    loadComponent: () => import('./read/read.component').then(c => c.ReadComponent),
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BlogComponent
  ]
})
export class BlogModule {
}
