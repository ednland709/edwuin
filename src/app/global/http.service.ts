import { Injectable } from '@angular/core';
import {
    RequestOptions,
    Request,
    RequestOptionsArgs,
    Response,
    Http,
    Headers
} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {

    constructor(private http: Http) { }

    async getAsync(url: string, options?: RequestOptionsArgs): Promise<any> {
        try {
            url = this.updateUrl(url);
            const response = await this.http.get(url, this.getRequestOptionArgs(options)).toPromise();
            return response.json().data;
        } catch (error) {
            return Promise.reject(error.message || error);
        }
    }

    private updateUrl(req: string) {
        return 'http://localhost:3000/api/' + req;
    }

    private getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        options.headers.append('Content-Type', 'application/json');

        return options;
    }
}