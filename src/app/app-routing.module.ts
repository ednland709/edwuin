import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module'

import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
  { path: '', redirectTo: 'core/login', pathMatch: 'full'},
  {path: 'core', loadChildren: 'app/core/core.module#CoreModule'}

  // { path: '', children: []}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      ROUTES,
      // {enableTracing: true}
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
