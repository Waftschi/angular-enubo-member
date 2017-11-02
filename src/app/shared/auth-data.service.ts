import './rxjs';
import { Auth } from './model/auth';
import { DataService } from './data.service';
import { Http } from '@angular/http';
import {  Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RoutesService } from '../core/routes.service';

@Injectable()
export class AuthDataService {
    constructor(private routes: RoutesService , private http: Http) {}


    loginAndGetAuth$(body): Observable<Auth> {
        return this.http.post(this.routes.getUrl('authUrl'), body, DataService.getHeaders())
            .map(response => response.json())
            .do(data => DataService.log('auth', data))
            .catch(error => DataService.handleError(error));
    }
}
