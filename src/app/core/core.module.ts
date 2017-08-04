import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { DynamicsListComponent } from './dynamics/dynamics-list/dynamics-list.component';
import { DynamicsMergeComponent } from './dynamics/dynamics-merge/dynamics-merge.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [LoginComponent, MenuComponent, DynamicsListComponent, DynamicsMergeComponent]
})
export class CoreModule { }
