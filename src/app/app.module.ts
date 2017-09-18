import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MessageService } from 'primeng/components/common/messageservice';
import { GrowlModule } from 'primeng/components/growl/growl';
import {DataTableModule, SharedModule} from 'primeng/primeng';
import { MenubarModule } from 'primeng/components/menubar/menubar';
import {TabViewModule} from 'primeng/primeng';

import { AppComponent } from './core/app/app.component';
import { LoginComponent } from './core/login/login.component'
import { DynamicsListComponent } from './core/dynamics/dynamics-list/dynamics-list.component';
import { DynamicsMergeComponent } from './core/dynamics/dynamics-merge/dynamics-merge.component';
import { MainComponent } from './core/main/main.component';
import { MenuComponent } from './core/menu/menu.component';
// routing
import { AppRoutingModule } from './app-routing.module';
// services
import { DynamicsService } from './core/dynamics/dynamics.service';
import { LoginService } from './core/login/login.service';
import { HttpService } from './core/http.service';
import { MenuObservable } from './core/menu/menu.observable';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DynamicsListComponent,
    DynamicsMergeComponent,
    MainComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    GrowlModule,
    AppRoutingModule,
    HttpModule,
    CommonModule,
    HttpModule,
    DataTableModule,
    SharedModule,
    FormsModule,
    MenubarModule,
    TabViewModule
  ],
  providers: [
    MenuObservable,
    MessageService,
    DynamicsService,
    LoginService,
    HttpService,
    MenuObservable
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
