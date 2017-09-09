import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http'
import {DataTableModule, SharedModule} from 'primeng/primeng';
import { FormsModule } from '@angular/forms';

import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './login/login.component';
import { DynamicsListComponent } from './dynamics/dynamics-list/dynamics-list.component';
import { DynamicsMergeComponent } from './dynamics/dynamics-merge/dynamics-merge.component';
import { MainComponent } from './main/main.component';
// services
import { DynamicsService } from './dynamics/dynamics.service';
import { LoginService } from './login/login.service';
import { HttpService } from '../global/http.service';
import { MenuObservable } from '../global/menu/menu.observable';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    CoreRoutingModule,
    DataTableModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
    LoginComponent,
    DynamicsListComponent,
    DynamicsMergeComponent,
    MainComponent
  ],
  providers: [
    DynamicsService,
    LoginService,
    HttpService,
    MenuObservable
  ],
exports: [ ]
})
export class CoreModule { }
