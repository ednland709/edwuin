import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//import { BrowserModule } from '@angular/platform-browser';

import { LoginComponent } from './login/login.component'
import { DynamicsListComponent } from './dynamics/dynamics-list/dynamics-list.component';
import { DynamicsMergeComponent } from './dynamics/dynamics-merge/dynamics-merge.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: MainComponent, children: [
          { path: 'login', component: LoginComponent },
          { path: 'dynamics/:collection', component: DynamicsListComponent },
          { path: 'dynamics/merge/:collection/:id', component: DynamicsMergeComponent }
        ]
      }


    ])
  ],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
