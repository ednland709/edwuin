import { Injectable } from '@angular/core';
import { HttpService } from '../../global/http.service';



@Injectable()
export class LoginService {

  constructor( private _http: HttpService) { }

  async validateUser(data) {
    return this._http.postAsync(`user/validate`, data);

  }

  registerToken(token) {
    this._http.registerToken(token);
  }
}
