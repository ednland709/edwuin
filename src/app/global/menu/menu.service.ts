import { Injectable } from '@angular/core';
//import { Http } from '@angular/http'
import { CoolHttp } from 'angular2-cool-http';

@Injectable()
export class MenuService {

  constructor(private coolHttp:CoolHttp) { }


  async get(){
    let response = await this.coolHttp.getAsync('menu');

    console.log(response);
    /*
    this.http.get('/api/test/').map(res => {
            this.map = res.json().data;
        })
          */
  }

}