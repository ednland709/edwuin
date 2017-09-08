import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuEventsManager } from '../../global/menu/menu.observable';

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
    private router: Router,
    private _menuEventsManager: MenuEventsManager
  ) { }

  ngOnInit() {
  }

  async LogIn() {
    if (this.formData.email && this.formData.pw && this.formData.tenant) {
      const res = await this._loginService.validateUser(this.formData);

      if (res.status === 1) {
        localStorage.setItem('currentUser', JSON.stringify(res));
        // emiter menu
        if (res.menu) {
          this._menuEventsManager.showMenu(res.menu);
        }

        this._loginService.registerToken(res.token);

        this.router.navigate(['/core/main']);
      }
    }
  }
}
