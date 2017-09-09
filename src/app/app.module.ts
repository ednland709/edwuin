import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';

import { MenubarModule } from 'primeng/components/menubar/menubar';
import { MessageService } from 'primeng/components/common/messageservice';
import { GrowlModule } from 'primeng/components/growl/growl';

import { AppComponent } from './global/app/app.component';
import { MenuComponent } from './global/menu/menu.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

import { HttpService } from './global/http.service';
import { MenuObservable } from './global/menu/menu.observable';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    CoreModule,
    GrowlModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    MenuObservable,
    MessageService,
    HttpService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
