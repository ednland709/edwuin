import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoolHttp, HttpHeader } from 'angular2-cool-http';
import { GrowlModule } from 'primeng/components/growl/growl';

import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  msgs: Message[] = [];

  constructor(
    private router: Router,
    private coolHttp: CoolHttp,
    private growl: GrowlModule,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.coolHttp.registerBaseUrl('http://localhost:3000/api/');
    this.coolHttp.registerGlobalHeader(new HttpHeader('token', 'prueba'));
    this.coolHttp.registerGlobalHeader(new HttpHeader('tenant', 'datae'));

    this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });

    this.coolHttp.registerResponseInterceptor({
      afterResponseAsync: function (url, method, data, headers) {
        if (url._body) {
          let res: any = JSON.parse(url._body);
          if (res.status === 1) {
            res = res.data;
          } else {
            // show message of the error
            let mes: string;
            if (res.message) {
              mes = res.message;
            } else {
              if (res.error) {
                mes = res.error.message;
              } else {
                mes = 'error desconocido en el servicio';
              }
            }

            res = {};
            res.message = mes;
            // this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
          }

          return new Promise((resolve, reject) => {
            resolve(true);
          });
        }
      }
    });

    const currentUser: any = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser === undefined || currentUser === null) {
      this.router.navigate(['/core/login']);
    } else {
      this.router.navigate(currentUser.defaultPage);
    }

  }
}
