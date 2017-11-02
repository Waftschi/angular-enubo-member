import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Project } from '../shared/model/project';
import { Http } from '@angular/http';
import { APP_URLS } from '../core/config';
import { DataService } from '../shared/data.service';

@Injectable()
export class ProjectService {
    projects: Project[];

    constructor(@Inject(APP_URLS) private urls: any, private http: Http) {
    }

    /**
     * @returns {Observable<Project[]>}
     */
    getProjects$(authKey): Observable<Project[]> {
        return this.http.get(this.urls.projectsUrl + authKey)
            .map(response => <Project[]>response.json())
            .do(data => DataService.log('auth', data))
            .catch(error => DataService.handleError(error));
    }


    setProjects(projects) {
        this.projects = projects;
    }
}
