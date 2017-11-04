import { ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Job } from '../../shared/model/job';
import { TestJobAlert } from '../job-alert';

@Component({
    selector: 'app-job-list',
    templateUrl: './job-list.component.html',
    styleUrls: ['./job-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobListComponent implements OnInit, DoCheck {
    jobAlert: any;
    value: any;
    counterIn: number;

    @Input() jobs: Job[];

    @Input()
    set counter(counter: number) {
        this.counterIn = counter * 2;
    }

    @Output() jobEmit = new EventEmitter();

    constructor(jobAlert: TestJobAlert) {
        jobAlert.getMyEventSubject().subscribe(
            val => {
                this.value = val;
            }
        );
    }

    ngOnInit() {
    }

    ngDoCheck() {
        console.dir('doCheck');
    }
}
