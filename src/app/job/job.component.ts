import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { JobService } from './job.service';
import { Job } from '../shared/model/job';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/concatAll';

@Component({
    selector: 'app-job',
    templateUrl: './job.component.html',
    styleUrls: ['./job.component.css'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobComponent implements OnInit {
    jobs$: Observable<Job[]>;
    jobs: Job[] = [];
    private authKey: string;

    constructor(private jobService: JobService, private authService: AuthService) {
        this.authKey = this.authService.getAuthKey();
    }

    ngOnInit() {
        this.jobs$ = this.jobService.getJobs$(this.authKey);
    }

}
