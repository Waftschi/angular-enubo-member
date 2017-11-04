import { TestBed, async, inject, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './shared/auth.service';
import { AuthDataService } from './shared/auth-data.service';
import { RoutesService } from './core/routes.service';
import { HttpModule } from '@angular/http';


class MockAuthService extends AuthService {
    isLoggedIn() {
        return true;
    }
}

// class MockAuthDataService extends AuthDataService {
//     loginAndGetAuth$(): Observable<Auth> {
//         const auth = <Auth> {};
//         return Observable.of(auth);
//     }
// }
//
//
// class MockRoutesService extends RoutesService {
//     getUrl(): string {
//         return 'abcd';
//     }
// }

describe('AppComponent', () => {
    let testBedService: AuthService;
    let fixture: ComponentFixture<AppComponent>;
    let componentService: AuthService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule, HttpModule,
            ],
            declarations: [
                AppComponent
            ],
            providers: [AuthService, AuthDataService, RoutesService, {provide: AuthService, useClass: MockAuthService}]
        }).compileComponents();

        // TestBed.overrideComponent(
        //     AppComponent,
        //     {
        //         set: {
        //             providers: [{provide: AuthService, useClass: MockAuthService}]
        //         }
        //     }
        // );

        fixture = TestBed.createComponent(AppComponent);

        // AuthService provided to the TestBed
        testBedService = TestBed.get(AuthService);

        // AuthService provided by Component, (should return MockAuthService)
        componentService = fixture.debugElement.injector.get(AuthService);
    }));


    it('should create the app', async(() => {
        // const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));


    it('Service injected via inject(...) and TestBed.get(...) should be the same instance',
        inject([AuthService], (injectService: AuthService) => {
            expect(injectService).toBe(testBedService);
        })
    );

    it('Service injected via component should be and instance of MockAuthService', () => {
        expect(componentService instanceof MockAuthService).toBeTruthy();
    });


    it(`should have as title 'app'`, async(() => {
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('app');
    }));

    // it('should render title in a h1 tag', async(() => {
    //     const fixture = TestBed.createComponent(AppComponent);
    //     fixture.detectChanges();
    //     const compiled = fixture.debugElement.nativeElement;
    //     expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
    // }));
});
