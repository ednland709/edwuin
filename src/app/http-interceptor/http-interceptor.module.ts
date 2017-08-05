import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterceptedHttp } from './http-interceptor.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InterceptedHttp],
  providers: [InterceptedHttp]
})

export class HttpInterceptorModule { }
