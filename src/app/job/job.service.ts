import { Injectable } from '@angular/core';
import { ProjectService } from './project.service';
import { LocationService } from './location.service';
import { SkillService } from './skill.service';
import { Observable } from 'rxjs/Observable';
import { Job } from '../shared/model/job';
import '../shared/rxjs';
import { Project } from '../shared/model/project';
import { Skill } from '../shared/model/skill';
import { AuthService } from '../shared/auth.service';

@Injectable()
export class JobService {
    skills: Skill[];
    locations: Location[];
    projects: Project[];

    constructor(private authService: AuthService,
                private projectsService: ProjectService,
                private locationService: LocationService,
                private skillService: SkillService) {
    }


    /**
     *
     * @param authKey
     * @returns {Observable<any>}
     */
    getJobs$(authKey): Observable<any> {
        return Observable.combineLatest(
            this.projectsService.getProjects$(authKey),
            this.locationService.getLocations$(authKey),
            this.skillService.getSkills$(authKey),
            (projects, locations, skills) => {
                this.projects = projects;
                this.locations = locations;
                this.skills = skills;
            }
        );

    }

    private prepareJob(job, project) {
        job.startDateId = project.startDateId;
        job.locationId = project.locationId;
        job.isWorking = job.users.indexOf(this.authService.getUserId()) !== -1;
        job.isApplying = job.applyingUsers.indexOf(this.authService.getUserId()) !== -1;
        job.projectId = project.projectId;
        // job.skill = this.skillsService.getSkill(job.skillId);
        // job.location = this.locationsService.getLocation(job.locationId);
    }

}
