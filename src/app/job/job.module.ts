import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobComponent } from './job.component';
import { ProjectService } from './project.service';
import { SkillService } from './skill.service';
import { LocationService } from './location.service';
import { JobService } from './job.service';
import { RoutesService } from '../core/routes.service';
import { JobListComponent } from './job-list/job-list.component';
import { JobAlert, TestJobAlert } from './job-alert';


@NgModule({
    imports: [
        CommonModule,
    ],
    providers: [ProjectService, SkillService, LocationService, JobService, JobAlert, TestJobAlert],
    declarations: [JobComponent, JobListComponent]
})
export class JobModule {
}
