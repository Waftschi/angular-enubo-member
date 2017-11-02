import { InjectionToken } from '@angular/core';
import { ToastOptions } from 'ng2-toastr';

const baseUrl = 'http://localhost:4200';

// export const URLS = {
//     authUrl: '/api/v1/public/auth',
//     skillsUrl: '/api/v1/app/members/skills/auth-key/',
//     locationsUrl: '/api/v1/app/members/locations/auth-key/',
//     projectsUrl: '/api/v1/app/members/projects/auth-key/'
// };
//
//
// export const APP_URLS = new InjectionToken<string>('Urls');
// export const URLS_PROVIDER = [{provide: APP_URLS, useValue: URLS}];

export class CustomToastOption extends ToastOptions {
    animate = 'flyRight'; // you can override any options available
    newestOnTop = false;
    showCloseButton = true;
}
