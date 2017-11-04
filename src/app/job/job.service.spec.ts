import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { JobService } from './job.service';
import { AuthService } from '../shared/auth.service';
import { AuthDataService } from '../shared/auth-data.service';
import { RoutesService } from '../core/routes.service';
import { HttpModule } from '@angular/http';
import { ProjectService } from './project.service';
import { LocationService } from './location.service';
import { SkillService } from './skill.service';

class MockAuthService extends AuthService {
    isLoggedIn() {
        return true;
    }
}

describe('JobService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule,
                RouterTestingModule.withRoutes([]),
            ],
            providers: [JobService, RoutesService, AuthDataService, ProjectService, LocationService, SkillService, {
                provide: AuthService,
                useClass: MockAuthService
            }]
        });


    });
    it('should be created', inject([JobService], (service: JobService) => {
        expect(service).toBeTruthy();
    }));
});
