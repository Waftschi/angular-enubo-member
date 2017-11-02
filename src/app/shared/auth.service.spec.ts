import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AuthDataService } from './auth-data.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, AuthDataService]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
