import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { UserService } from '../user/user/user.service';
import { AuthService } from '../shared/auth.service';
import 'rxjs/add/operator/do';
import { User } from '../user/user/user';
import 'rxjs/add/operator/map';
import { Action } from '@ngrx/store';

@Injectable()
export class UserEffects {

    constructor(private actions$: Actions, private userService: UserService, private authService: AuthService) {
    }


    @Effect() user$ = this.actions$
    // Has to be the defined action
        .ofType('LOAD_USER_EFFECT')
        .switchMap(() => Observable.of({type: 'LOAD_USER', payload: {userId: 1}})
            // console.dir(action);
            //this.userService.getUser$(this.authService.getAuthKey())
            //.map((user) => ({action: 'LOAD_USER', payload: user}));
        );
}
