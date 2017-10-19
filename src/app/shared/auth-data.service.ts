import { Inject, Injectable } from '@angular/core';
import { APP_URLS } from '../core/config';
import { IAuth } from './auth.service';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { DataService } from './data.service';

import './rxjs';

@Injectable()
export class AuthDataService {
    constructor(@Inject(APP_URLS) private urls: any, private http: Http) {}

    /**
     * @param body
     * @returns {Observable<IAuth>}
     */
    loginAndGetAuth(body): Observable<IAuth> {
        return this.http.post(this.urls.authUrl, body, DataService.getHeaders())
            .map(response => response.json())
            .do(data => {
                DataService.log('auth', data);
            }).catch(error => DataService.handleError(error));
    }
}
