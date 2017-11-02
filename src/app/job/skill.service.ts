import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Project } from '../shared/model/project';
import { Http } from '@angular/http';
// import { APP_URLS } from '../core/config';
import { DataService } from '../shared/data.service';
import { Skill } from '../shared/model/skill';
import { RoutesService } from '../core/routes.service';

@Injectable()
export class SkillService {
    private skills: Skill[];

    constructor(private routes: RoutesService, private http: Http) {
    }

    getSkills$(authKey): Observable<Skill[]> {
        return this.http.get(this.routes.getUrl('skillsUrl') + authKey)
            .map(response => <Project[]>response.json())
            .do(data => DataService.log('auth', data))
            .catch(error => DataService.handleError(error));
    }

    setSkills(skills) {
        this.skills = skills;
    }
}
