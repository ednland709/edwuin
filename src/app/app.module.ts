import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MenubarModule} from 'primeng/components/menubar/menubar';
import { CoolHttpModule } from 'angular2-cool-http';

import { AppComponent } from './global/app/app.component';
import { MenuComponent } from './global/menu/menu.component'

import { CoreModule } from './core/core.module'

import { AppRoutingModule} from './app-routing.module';

import { MenuService } from './global/menu/menu.service'

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
    AppRoutingModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})

export class AppModule { }
