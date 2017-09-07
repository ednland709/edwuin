import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/components/common/messageservice';

import { InputTextModule } from 'primeng/primeng';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formData: any = {
    email: 'ednland@hotmail.com',
    pw: 'a',
    tenant: 'datae'
  };

  constructor(
    private _loginService: LoginService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async LogIn() {
    if (this.formData.email && this.formData.pw && this.formData.tenant) {
      const res = await this._loginService.validateUser(this.formData);

      if (res.status === 1) {
        localStorage.setItem('currentUser', JSON.stringify(res));
        this.router.navigate(['/core/main']);

      } else {
        if (res.message) {
          this.messageService.add({ severity: 'error', summary: 'DATAE', detail: res.message });
        }
      }
    }
  }
}
