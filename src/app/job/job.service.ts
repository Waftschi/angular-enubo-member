import '../shared/rxjs';
import { AuthService } from '../shared/auth.service';
import { Injectable } from '@angular/core';
import { Job } from '../shared/model/job';
import { LocationService } from './location.service';
import { Observable } from 'rxjs/Observable';
import { ProjectService } from './project.service';
import { SkillService } from './skill.service';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class JobService {
    jobs: any;

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
                this.setServiceData(projects, skills, locations);
                const jobs = projects.map(project => {
                    return project.jobs.map(job => {
                            return this.prepareJob(job, project, locations, skills);
                        }
                    );
                });
                this.jobs = [].concat.apply([], jobs);

            }).map(_ => this.jobs);
    }


    private setServiceData(projects, skills, locations) {
        this.projectsService.setProjects(projects);
        this.skillService.setSkills(skills);
        this.locationService.setLocations(locations);
    }


    private prepareJob(job, project, locations, skills): Job {
        job.startDateId = project.startDateId;
        job.locationId = project.locationId;
        job.isWorking = job.users.indexOf(this.authService.getUserId()) !== -1;
        job.isApplying = job.applyingUsers.indexOf(this.authService.getUserId()) !== -1;
        job.projectId = project.projectId;

        job.skill = skills.find(s => s.skillId === job.skillId);
        job.location = locations.find(l => l.locationId === job.locationId);
        return job;
    }

}
