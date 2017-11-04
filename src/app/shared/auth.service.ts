import { Injectable } from '@angular/core';
import { AuthDataService } from './auth-data.service';
import { Router } from '@angular/router';
import './rxjs';
import { Observable } from 'rxjs/Observable';
import { Auth } from './model/auth';

@Injectable()
export class AuthService {
    private url = '/job';
    private auth: Auth = null;

    constructor(private authData: AuthDataService, private router: Router) {
    }

    login$(body): Observable<any> {
        return this.authData.loginAndGetAuth$(body)
            .map(result => {
                if (result.status === 'forbidden') {
                    return null;
                }
                return this.auth = result;
            });

    }


    isLoggedIn() {
        return this.auth !== null;
    }

    getAuthKey() {
        return this.auth.authKey;
    }

    logout() {
        this.auth = null;
        this.router.navigate(['/login']);
    }

    /**
     *
     * @returns {number}
     */
    getUserId() {
        return this.auth.userId;
    }

    set redirectUrl(url) {
        this.url = url;
    }

    get redirectUrl() {
        return this.url;
    }

}
