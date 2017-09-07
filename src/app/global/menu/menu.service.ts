import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable()
export class MenuService {

  constructor(private http: HttpService) { }

  async get() {
    return await this.http.getAsync('menu');
  }
}
