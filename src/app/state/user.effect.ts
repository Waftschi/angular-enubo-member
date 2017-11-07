import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { UserService } from '../user/user/user.service';
import { AuthService } from '../shared/auth.service';
import 'rxjs/add/operator/do';

@Injectable()
export class UserEffects {
    payload = {type: 'test', payload: '12344'};

    constructor(// private companyService: CompanyService,
        private actions$: Actions, private userService: UserService, private authService: AuthService) {
    }


    @Effect() user$ = this.actions$
    // Has to be the defined action
        .ofType('LOAD_USER')
        .switchMap(action => Observable.of(this.payload))
        .do(val => console.dir)
        .do(_ => console.log('Effect fired'));
}
