import './rxjs';
import { APP_URLS } from '../core/config';
import { Auth } from './model/auth';
import { DataService } from './data.service';
import { Http } from '@angular/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthDataService {
    constructor(@Inject(APP_URLS) private urls: any, private http: Http) {}


    loginAndGetAuth$(body): Observable<Auth> {
        return this.http.post(this.urls.authUrl, body, DataService.getHeaders())
            .map(response => response.json())
            .do(data => DataService.log('auth', data))
            .catch(error => DataService.handleError(error));
    }
}
