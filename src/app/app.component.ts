import { Component, EventEmitter, Inject, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from './shared/auth.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import { TEST_FACTORY, testFactory } from './test-inject';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [{provide: TEST_FACTORY, useFactory: testFactory}]
})
export class AppComponent implements OnInit, OnDestroy {
    private authKey: string;
    private authKeyGet: Subscription;
    private subject = new Subject<string>();
    private emitter: EventEmitter<string> = new EventEmitter();

    // Component title
    public title = 'app';

    constructor(@Inject(TEST_FACTORY) private test: any,
                private authService: AuthService,
                private activateRoute: ActivatedRoute) {
    }

    ngOnInit() {
        console.dir(this.emitter);

        //
        this.subject.distinctUntilChanged().debounceTime(1000).subscribe(console.log);

        // Test injector usage
        this.test.logger('Hallo wie geht es');

        // Event emitter as observer ...
        this.emitter
            .map((v) => v)
            .debounceTime(1000)
            .subscribe(console.log);


        // // console.dir(this.activateRoute.snapshot.params);
        // console.log('Beeing Home');

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
