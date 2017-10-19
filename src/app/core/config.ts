import { InjectionToken } from '@angular/core';

const baseUrl = 'http://localhost:4200';

export const URLS = {
    authUrl: '/api/v1/public/auth'
};


export const APP_URLS = new InjectionToken<string>('Urls');
export const URLS_PROVIDER = [{provide: APP_URLS, useValue: URLS}];