import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http'
import {DataTableModule,SharedModule} from 'primeng/primeng';

import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './login/login.component';
import { DynamicsListComponent } from './dynamics/dynamics-list/dynamics-list.component';
import { DynamicsMergeComponent } from './dynamics/dynamics-merge/dynamics-merge.component';
import { MainComponent } from './main/main.component';
//services
import { DynamicsService } from './dynamics/dynamics.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    CoreRoutingModule,
    DataTableModule,
    SharedModule
  ],
  declarations: [
    LoginComponent,
    DynamicsListComponent,
    DynamicsMergeComponent,
    MainComponent
  ],
  providers: [
    DynamicsService
  ],
exports: [ ]
})
export class CoreModule { }
