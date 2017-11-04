import { DataService } from '../shared/data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { JobLocation } from '../shared/model/location';
import { Observable } from 'rxjs/Observable';
import { Project } from '../shared/model/project';
import { RoutesService } from '../core/routes.service';

@Injectable()
export class LocationService {
    private locations: JobLocation[];

    constructor(private routes: RoutesService, private http: Http) {
    }

    getLocations$(authKey): Observable<JobLocation[]> {
        return this.http.get(this.routes.getUrl('locationsUrl') + authKey)
            .map(response => <Project[]>response.json())
            .do(data => DataService.log('auth', data))
            .catch(error => DataService.handleError(error));
    }

    setLocations(locations) {
        this.locations = locations;
    }
}
