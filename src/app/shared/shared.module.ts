import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService, AuthDataService, DataService } from './shared';
// import { URLS_PROVIDER } from '../core/config';
import { AuthGuard } from './auth-guard.service';


@NgModule({
    imports: [
        CommonModule,
    ],
    providers: [AuthService, AuthDataService, DataService, AuthGuard]
})
export class SharedModule {
}
