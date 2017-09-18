import { NgModule } from '@angular/core';

import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './core/login/login.component'
import { DynamicsListComponent } from './core/dynamics/dynamics-list/dynamics-list.component';
import { DynamicsMergeComponent } from './core/dynamics/dynamics-merge/dynamics-merge.component';
import { MainComponent } from './core/main/main.component';
import { MenuComponent } from './core/menu/menu.component';


import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
  { path: '', redirectTo: 'core/login', pathMatch: 'full' },
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
  { path: 'core/login', component: LoginComponent },
  { path: 'core/main', component: MainComponent },
  { path: 'core/dynamics/:collection', component: DynamicsListComponent },
  { path: 'core/dynamics/merge/:data', component: DynamicsMergeComponent }
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
