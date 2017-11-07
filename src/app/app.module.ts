import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { SharedModule } from './shared/shared.module';
import { HttpModule } from '@angular/http';
import { CoreModule } from './core/core.module';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { CustomToastOption } from './core/config';
import { JobModule } from './job/job.module';
import { RoutesService } from './core/routes.service';
import { TEST_FACTORY, testFactory } from './test-inject';

// import { TEST_FACTORY, testFactory } from './test-inject';


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
        ToastModule.forRoot()
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
