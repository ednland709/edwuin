import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GrowlModule } from 'primeng/components/growl/growl';

import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  msgs: Message[] = [];

  constructor(
    private _router: Router,
    private growl: GrowlModule,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      const currentUser: any = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser === undefined || currentUser === null) {
        this._router.navigate(['/core/login']);
      } else {
        this._router.navigate(['/core/main']);
        this._httpService.registerToken(currentUser.token);
      }
    }
  }
}
