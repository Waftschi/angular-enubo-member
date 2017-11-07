import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { CustomToastOption } from './core/config';
import { HomeModule } from './home/home.module';
import { HttpModule } from '@angular/http';
import { JobModule } from './job/job.module';
import { LoginModule } from './login/login.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { Router } from '@angular/router';
import { RoutesService } from './core/routes.service';
import { SharedModule } from './shared/shared.module';
import { TEST_FACTORY, testFactory } from './test-inject';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { UserModule } from './user/user.module';


import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { userReducer } from './state/user.reducer';
import { UserEffects } from './state/user.effect';

// import { StoreModule, MetaReducer, ActionReducerMap, State } from '@ngrx/store';
// export interface State {}
//
// export const reducers: ActionReducerMap<State> = {
//     counter: counterReducer
// };
// export const metaReducers: MetaReducer<State>[] = [storeFreeze];


@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    imports: [
        HttpModule,
        BrowserModule,
        UserModule,
        HomeModule,
        AppRoutingModule,
        SharedModule,
        JobModule,
        LoginModule,
        CoreModule,
        BrowserAnimationsModule,
        ToastModule.forRoot(),
        StoreModule.forRoot({user: userReducer}), // << register your store
        EffectsModule.forRoot([UserEffects]),
        StoreDevtoolsModule.instrument()
    ],
    providers: [{provide: ToastOptions, useClass: CustomToastOption}, RoutesService, {
        provide: TEST_FACTORY,
        useFactory: testFactory
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(router: Router) {
        console.log('Routes: ', JSON.stringify(router.config, undefined, 1));
    }
}
