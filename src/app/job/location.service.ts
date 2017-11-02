import { APP_URLS } from '../core/config';
import { DataService } from '../shared/data.service';
import { Http } from '@angular/http';
import { Inject, Injectable } from '@angular/core';
import { JobLocation } from '../shared/model/location';
import { Observable } from 'rxjs/Observable';
import { Project } from '../shared/model/project';

@Injectable()
export class LocationService {
    private locations: JobLocation[];

    constructor(@Inject(APP_URLS) private urls: any, private http: Http) {
    }

    getLocations$(authKey): Observable<JobLocation[]> {
        return this.http.get(this.urls.locationsUrl + authKey)
            .map(response => <Project[]>response.json())
            .do(data => DataService.log('auth', data))
            .catch(error => DataService.handleError(error));
    }

    setLocations(locations) {
        this.locations = locations;
    }
}