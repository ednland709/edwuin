import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private growl: GrowlModule,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });

    if (localStorage.getItem('currentUser')) {
      localStorage.clear();
      const currentUser: any = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser === undefined || currentUser === null) {
        this.router.navigate(['/core/login']);
      } else {
        this.router.navigate(currentUser.defaultPage);
      }
    }
  }
}
