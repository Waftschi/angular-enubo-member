import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { JobService } from './job.service';
import { Job } from '../shared/model/job';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/concatAll';
import { JobListComponent } from './job-list/job-list.component';
import { JobAlert, TestJobAlert } from './job-alert';


@Component({
    selector: 'app-job',
    templateUrl: './job.component.html',
    styleUrls: ['./job.component.css'],
})
export class JobComponent implements OnInit {
    val: any;
    counter = 0;
    jobs$: Observable<Job[]>;
    jobs: Job[] = [];
    private authKey: string;

    @ViewChild(JobListComponent) jobList: JobListComponent;

    constructor(private jobService: JobService, private authService: AuthService, private jobAlert: TestJobAlert) {
        this.authKey = this.authService.getAuthKey();
    }

    ngOnInit() {
        this.jobs$ = this.jobService.getJobs$(this.authKey);

        this.jobAlert.getMyEventSubject().subscribe(
            val => {
                this.val = val;
            }
        );
    }

    handleJobEmit(job) {
        console.dir(job.projectId);
    }

    incCounter() {
        // this.jobList.changeJobList();
        // this.jobAlert.doAlert();
        this.counter++;
        this.jobAlert.setMyEventSubject(this.counter);
    }

}
