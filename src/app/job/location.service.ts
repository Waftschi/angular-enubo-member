import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Project } from '../shared/model/project';
import { Http } from '@angular/http';
import { APP_URLS } from '../core/config';
import { DataService } from '../shared/data.service';
import { Skill } from '../shared/model/skill';

@Injectable()
export class LocationService {
    constructor(@Inject(APP_URLS) private urls: any, private http: Http) {
    }

    getLocations$(authKey): Observable<Location[]> {
        return this.http.get(this.urls.locationsUrl + authKey)
            .map(response => <Project[]>response.json())
            .do(data => DataService.log('auth', data))
            .catch(error => DataService.handleError(error));
    }
}
