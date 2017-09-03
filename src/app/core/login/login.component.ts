import { Component, OnInit } from '@angular/core';

import { InputTextModule } from 'primeng/primeng';
import { LogginService } from './loggin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data: any = {
    user: '',
    pw: '',
    tenant: ''
  };

  constructor(
    private _logginService: LogginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async LogIn() {
    if (this.data.user && this.data.pw && this.data.tenant) {
      const res = await this._logginService.validateUser(this.data);

      if (res) {
        if (res.message) {

        } else {
          // save the object anf go on
          localStorage.setItem('currentUser', res);
          this.router.navigate(['/core/main']);
        }
      }
    }
  }

}
