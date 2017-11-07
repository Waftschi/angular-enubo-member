import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { AuthService } from '../../shared/auth.service';
import { Observable } from 'rxjs/Observable';
import { User } from './user';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app-state';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    user$: Observable<User>;

    constructor(private userService: UserService,
                private authService: AuthService,
                private store: Store<AppState>) {

        this.user$ = store.select('user');
    }

    ngOnInit() {
        const action = {type: 'LOAD_USER'};
        this.store.dispatch(action);
        // this.userService.getLUser$(this.authService.getAuthKey()).subscribe(user => console.dir);
    }
}

