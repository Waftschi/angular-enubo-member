import { Component, Inject, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../../core/validation.service';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;
    public loginData: any;

    constructor(private formBuilder: FormBuilder,
                private authService: AuthService,
                private router: Router,
                private toastr: ToastsManager, private vcr: ViewContainerRef) {

        this.toastr.setRootViewContainerRef(vcr);

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
    }

    login() {
        const body = {...this.loginData, ...this.loginForm.value};
        // const result = Object.assign({}, this.loginData, this.loginForm.value);
        // console.log('Saved: ' + JSON.stringify(body));
        this.authService.login(body).then(
            (result) => {
                if (result === true) {
                    this.router.navigate([this.authService.redirectUrl]);
                } else {
                    this.toastr.error('This is not good!', 'Oops!');
                    this.router.navigate(['/login']);
                }
            }
        );
    }

}
