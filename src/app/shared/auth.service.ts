import { Injectable } from '@angular/core';
import { AuthDataService } from './auth-data.service';
import { Router } from '@angular/router';
import './rxjs';

export interface IAuth {
    authKey: string;
    userId: number;
    dateCreate: string;
    type: string;
    clientId: number;
    clientName: string;
    status?: string;
}

@Injectable()
export class AuthService {
    private url = '/user';
    private auth: IAuth = null;

    constructor(private authData: AuthDataService, private router: Router) {}

    login(body): Promise<any> {
        return new Promise((resolve) => {
            this.authData.loginAndGetAuth(body).subscribe(result => {
                if (result.status === 'forbidden') {
                    this.auth = null;
                    resolve(false);
                }

                this.auth = result;
                resolve(true);
            });
        });
    }


    isLoggedIn() {
        return this.auth !== null;
    }

    logout() {
        this.auth = null;
        this.router.navigate(['/login']);
    }

    set redirectUrl(url) {
        this.url = url;
    }

    get redirectUrl() {
        return this.url;
    }

}
