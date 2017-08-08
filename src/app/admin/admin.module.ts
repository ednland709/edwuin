import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { TenantComponent } from './tenant/tenant.component';
import { Test1Component } from './src/app/admin/test1/test1.component';
import { Test2Component } from './src/app/admin/test2/test2.component';
import { Test3Component } from './src/app/admin/test3/test3.component';



@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [TenantComponent, Test1Component, Test2Component, Test3Component]
})
export class AdminModule { }
