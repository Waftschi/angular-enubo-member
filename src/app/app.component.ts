import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from './shared/auth.service';
import { MyEnum } from './my-enum.enum';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    private authKey: string;
    private authKeyGet: Subscription;

    private subject = new Subject<string>();
    protected emitter: EventEmitter<string> = new EventEmitter();

    constructor(private authService: AuthService, private activateRoute: ActivatedRoute) {
    }

    ngOnInit() {
        console.dir(this.emitter);

        this.subject.distinctUntilChanged().debounceTime(1000).subscribe(console.log);

        this.emitter
            .map((v) => v)
            .debounceTime(1000)
            .subscribe(console.log);


        // // console.dir(this.activateRoute.snapshot.params);


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

    changeEmit(e) {
        this.emitter.emit(e.target.value);

    }

    changeSubject(value) {
        this.subject.next(value);

    }

    logout() {
        this.authService.logout();
    }
}
