import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
  //{ path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'core', loadChildren: 'app/core/core.module#CoreModule'},
  {path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule'}
  //{ path: '', children: []}
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
