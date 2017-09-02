import { Injectable } from '@angular/core';
import { CoolHttp } from 'angular2-cool-http';
import 'rxjs/add/operator/map';

@Injectable()
export class DynamicsService {
    urlBase = 'dynamics/';
    str: string;
    map: any;

    constructor( private _coolHttp: CoolHttp) { }

    async getDefinition(collection: string) {
        return this._coolHttp.getAsync(`${this.urlBase}definitionnt/${collection}`);
    }

    async get(collection: string, id: number) {
        let url: string = this.urlBase;

        url += `/${collection}/${id}`;
    }

    async list(filter: any) {
        return await this._coolHttp.postAsync(`${this.urlBase}/list`, filter);
    }
}