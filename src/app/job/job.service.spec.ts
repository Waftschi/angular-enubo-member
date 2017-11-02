import { TestBed, inject } from '@angular/core/testing';

import { JobService } from './job.service';
import { AuthService } from '../shared/auth.service';

describe('JobService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobService, AuthService]
    });
  });

  // it('should be created', inject([JobService], (service: JobService) => {
  //   expect(service).toBeTruthy();
  // }));
});
