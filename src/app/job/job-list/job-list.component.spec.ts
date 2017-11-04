import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListComponent } from './job-list.component';
import { TestJobAlert } from '../job-alert';

describe('JobListComponent', () => {
    let component: JobListComponent;
    let fixture: ComponentFixture<JobListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [JobListComponent],
            providers: [TestJobAlert]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(JobListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
