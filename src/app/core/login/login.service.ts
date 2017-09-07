import { Injectable } from '@angular/core';
import { CoolHttp} from 'angular2-cool-http';


@Injectable()
export class LoginService {

  constructor( private _coolHttp: CoolHttp) { }

  async validateUser(data) {
    return this._coolHttp.postAsync(`user/validate`, data);

  }

}
