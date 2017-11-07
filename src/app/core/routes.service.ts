import { Injectable } from '@angular/core';

@Injectable()
export class RoutesService {
    private urls = {
        authUrl: '/api/v1/public/auth',
        skillsUrl: '/api/v1/app/members/skills/auth-key/',
        locationsUrl: '/api/v1/app/members/locations/auth-key/',
        projectsUrl: '/api/v1/app/members/projects/auth-key/',
        userUrl: '/api/v1/app/members/user/auth-key/'
    };

    constructor() {
    }

    getUrl(type): string {
        return this.urls[type];
    }
}
