import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { JobService } from './job.service';

@Component({
    selector: 'app-job',
    templateUrl: './job.component.html',
    styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
    private authKey: string;

    constructor(private jobService: JobService, private authService: AuthService) {
        this.authKey = this.authService.getAuthKey();
    }

    ngOnInit() {
        this.jobService.getJobs$(this.authKey).subscribe(
            _ => console.dir
        );
        // this.projectService.getProjects$(this.authService.getAuthKey()).subscribe(
        //     projects => console.dir
        // );
    }

}
