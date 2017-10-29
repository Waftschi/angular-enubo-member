import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobComponent } from './job.component';
import { ProjectService } from './project.service';
import { SkillService } from './skill.service';
import { LocationService } from './location.service';
import { JobService } from './job.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [ProjectService, SkillService, LocationService, JobService],
    declarations: [JobComponent]
})
export class JobModule {
}
