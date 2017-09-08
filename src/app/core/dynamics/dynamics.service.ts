import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpService } from '../../global/http.service';

@Injectable()
export class DynamicsService {
    urlBase = 'dynamics/';
    str: string;
    map: any;

    constructor( private _http: HttpService) { }

    async getDefinition(collection: string) {
        return this._http.getAsync(`${this.urlBase}definitionnt/${collection}`);
    }

    async get(collection: string, id: number) {
        let url: string = this.urlBase;

        url += `/${collection}/${id}`;
    }

    async list(filter: any) {
        return await this._http.postAsync(`${this.urlBase}/list`, filter);
    }
}
