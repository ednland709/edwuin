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
import { MessageService } from 'primeng/components/common/messageservice';
import { Router } from '@angular/router';

@Injectable()
export class HttpService {
    private _token = null;
    constructor(
        private http: Http,
        private messageService: MessageService,
        private _router: Router
    ) { }

    async getAsync(url: string, options?: RequestOptionsArgs): Promise<any> {
        try {
            url = this.updateUrl(url);
            const response = await this.http.get(url, this.getRequestOptionArgs(options)).toPromise();
            const res = response.json();

            if (response.status === 200) {
                if (res.status === 0) {
                    if (res.message) {
                        this.messageService.add({ severity: 'error', summary: 'DATAE', detail: res.message });
                    }
                }
            } else {
                this.messageService.add({ severity: 'error', summary: 'DATAE', detail: 'problema con el servidor, falta codificar' });
            }
            return res;
        } catch (error) {
            return Promise.reject(error.message || error);
        }
    }

    async postAsync(url: string, body: any, options?: RequestOptionsArgs): Promise<any> {
        try {
            url = this.updateUrl(url);
            const response = await this.http.post(url, body, this.getRequestOptionArgs(options)).toPromise();
            const res = response.json();

            if (response.status === 200) {
                if (res.status === 0) {
                    if (res.message) {
                        this.messageService.add({ severity: 'error', summary: 'DATAE', detail: res.message });
                    }

                    if (res.message === 'token invalido') {
                        this._router.navigate(['/core/main']);
                    };
                }
            } else {
                this.messageService.add({ severity: 'error', summary: 'DATAE', detail: 'problema con el servidor, falta codificar' });
            }

            return res;
        } catch (error) {
            return Promise.reject(error.message || error);
        }
    }

    async deleteAsync(url: string, options?: RequestOptionsArgs) {
        try {
            url = this.updateUrl(url);
            const response = await this.http.delete(url, this.getRequestOptionArgs(options)).toPromise();
            const res = response.json();

            if (response.status === 200) {
                if (res.status === 0) {
                    if (res.message) {
                        this.messageService.add({ severity: 'error', summary: 'DATAE', detail: res.message });
                    }
                }
            } else {
                this.messageService.add({ severity: 'error', summary: 'DATAE', detail: 'problema con el servidor, falta codificar' });
            }
            return res;
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
        if (this._token) {
            options.headers.append('token', this._token);
        }
        return options;
    }

    public registerToken(token) {
        this._token = token;
    }
}
