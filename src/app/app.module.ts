import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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



@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
    ],
    imports: [
        HttpModule,
        BrowserModule,
        UserModule,
        HomeModule,
        AppRoutingModule,
        SharedModule,
        LoginModule,
        CoreModule,
        BrowserAnimationsModule,
        ToastModule.forRoot()
    ],
    providers: [{provide: ToastOptions, useClass: CustomToastOption}],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(router: Router) {
        console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
}
