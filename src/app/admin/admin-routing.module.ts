import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';


const ADMIN_ROUTES: Routes = [
  {path: 'test',component: Test1Component},
  {path: 'test/detalle',component: Test2Component},
  /*
    children: [
      {
        path: 'detalle',
        component: Test2Component
      },
      {
        path: 'detalle/:id',
        component: Test3Component,
      }
    ]
  }
  */
];


@NgModule({
  imports: [RouterModule.forChild(ADMIN_ROUTES)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }