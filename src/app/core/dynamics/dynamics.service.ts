import { Injectable } from '@angular/core';
import { InterceptedHttp } from '../../http-interceptor/http-interceptor.module'
import 'rxjs/add/operator/map';

@Injectable()
export class DynamicsService {
    urlBase:string = "dynamics/";
    str: string;
    map: any;

    constructor( private http:InterceptedHttp) { }

    getDefinition(collection: string){
        let url:string = this.urlBase + 'definitionnt/';

        url += `/${collection}`;

        this.http.get(url).map(res => {
            this.map = res.json().data;
        })
    }

    get(collection: string, id:number) {
        let url:string = this.urlBase;

        url += `/${collection}/${id}`;
    }

    list(skip: number, limit: number){

    }
}