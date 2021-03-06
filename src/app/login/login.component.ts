import { Component, Inject, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';
import { ValidationService } from '../core/validation.service';
import { AuthService } from '../shared/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
    public loginForm: FormGroup;
    public loginData: any;

    constructor(private formBuilder: FormBuilder,
                private authService: AuthService,
                private router: Router,
                private toast: ToastsManager,
                private vcr: ViewContainerRef) {

        this.toast.setRootViewContainerRef(vcr);
        this.loginData = {
            clientId: 1
        };
    }

    ngOnInit() {
        /**
         * @type {FormGroup}
         */
        this.loginForm = this.formBuilder.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required, ValidationService.passwordValidator]],
        });

        this.loginForm.patchValue({username: 'user4', password: 'pwd123'});

        // only for testing
        this.login();
    }

    login() {

        // Login Data
        const body = {...this.loginData, ...this.loginForm.value};

        this.authService.login$(body).subscribe(
            (auth) => {
                if (auth === null) {
                    this.toast.error('This is not good!', 'Oops!');
                    this.router.navigate(['/login']);
                }

                this.router.navigate([this.authService.redirectUrl]);
            }
        );


    }

    ngOnDestroy() {
    }

}
