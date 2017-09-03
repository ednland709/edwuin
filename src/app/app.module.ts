import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoolHttpModule } from 'angular2-cool-http';

import { MenubarModule } from 'primeng/components/menubar/menubar';
import {MessageService} from 'primeng/components/common/messageservice';
import { GrowlModule } from 'primeng/components/growl/growl';

import { AppComponent } from './global/app/app.component';
import { MenuComponent } from './global/menu/menu.component';
import { CoreModule } from './core/core.module';

import { AppRoutingModule} from './app-routing.module';

import { MenuService } from './global/menu/menu.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    CoreModule,
    CoolHttpModule,
    GrowlModule,
    AppRoutingModule
  ],
  providers: [MenuService, MessageService],
  bootstrap: [AppComponent]
})

export class AppModule { }
