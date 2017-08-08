import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';


const ROUTES: Routes = [
  {
    path: '',
    component: Test1Component,
    children: [
      {
        path: '',
        component: Test2Component
      },
      {
        path: ':id',
        component: Test3Component,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
