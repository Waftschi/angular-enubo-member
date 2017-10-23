import { InjectionToken } from '@angular/core';
import { ToastOptions } from 'ng2-toastr';

const baseUrl = 'http://localhost:4200';

export const URLS = {
    authUrl: '/api/v1/public/auth'
};


export const APP_URLS = new InjectionToken<string>('Urls');
export const URLS_PROVIDER = [{provide: APP_URLS, useValue: URLS}];


export class CustomToastOption extends ToastOptions {
    animate = 'flyRight'; // you can override any options available
    newestOnTop = false;
    showCloseButton = true;
}
