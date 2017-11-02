import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from './shared/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    authKey: string;
    title = 'app';
    private authKeyGet: Subscription;

    constructor(private authService: AuthService, private activateRoute: ActivatedRoute) {}

    ngOnInit() {
        // console.dir(this.activateRoute.snapshot.params);
        this.authKeyGet = this.activateRoute.queryParams.subscribe((params: Params) => {
            this.authKey = params['authKey'];
        });
    }

    ngOnDestroy() {
        this.authKeyGet.unsubscribe();
    }

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }


    logout() {
        this.authService.logout();
    }
}
