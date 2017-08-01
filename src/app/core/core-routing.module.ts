import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {LoginComponent} from './login/login.component'



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    BrowserModule
  ],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
