import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [LoginComponent, MenuComponent]
})
export class CoreModule { }
