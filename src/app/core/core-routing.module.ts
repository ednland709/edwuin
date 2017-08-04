import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { BrowserModule } from '@angular/platform-browser';

import { LoginComponent } from './login/login.component'
import { DynamicsListComponent } from './dynamics/dynamics-list/dynamics-list.component';


const routes: Routes = [
  //{ path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dynamics/:collection', component: DynamicsListComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    //BrowserModule
  ],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
