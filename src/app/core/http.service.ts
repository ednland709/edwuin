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

                    if (res.message === 'token invalido') {
                        localStorage.clear();
                        this.messageService.add({ severity: 'error', summary: 'DATAE', detail: 'sesion invalida, ingrese de nuevo' });
                        this._router.navigate(['/core/login']);
                    } else if (res.message === 'Token vencido') {
                        localStorage.clear();
                        this.messageService.add({ severity: 'error', summary: 'DATAE', detail: 'Su sesionn expiro, ingrese de nuevo' });
                        this._router.navigate(['/core/login']);
                    } else if (res.message) {
                        this.messageService.add({ severity: 'error', summary: 'DATAE', detail: res.message });
                    }
                }
            } else {
                this.messageService.add({ severity: 'error', summary: 'DATAE', detail: 'problema con el servidor, falta codificar' });
            }

            return res;
        } catch (error) {
            if (error.status === 404) {
                this.messageService.add({ severity: 'error', summary: 'DATAE', detail: 'solicitud invalida' });
            } else if (error.status === 400) {
                this.messageService.add({ severity: 'error', summary: 'DATAE', detail: 'solicitud mal formulada' });
            } else if (error.status === 500) {
                this.messageService.add({
                    severity: 'error', summary: 'DATAE'
                    , detail: 'error interno, comuniquelo al operario de soporte'
                });
            } else {
                this.messageService.add({ severity: 'error', summary: 'DATAE', detail: 'htt return' + error.status });
            }
            // return Promise.reject(error.message || error);
            return { status: 0 };
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
