import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Project } from '../shared/model/project';
import { Http } from '@angular/http';
import { APP_URLS } from '../core/config';
import { DataService } from '../shared/data.service';
import { Skill } from '../shared/model/skill';

@Injectable()
export class SkillService {
// https://stage.oneplan.eu/api/v1/app/members/projects/auth-key/e08d2c5e3d490c6fec851c603d24e168
    // https://stage.oneplan.eu/api/v1/app/members/locations/auth-key/e08d2c5e3d490c6fec851c603d24e168
    //   https://stage.oneplan.eu/api/v1/app/members/skills/auth-key/e08d2c5e3d490c6fec851c603d24e168
    constructor(@Inject(APP_URLS) private urls: any, private http: Http) {
    }


    getSkills$(authKey): Observable<Skill[]> {
        return this.http.get(this.urls.skillsUrl + authKey)
            .map(response => <Project[]>response.json())
            .do(data => DataService.log('auth', data))
            .catch(error => DataService.handleError(error));
    }
}
