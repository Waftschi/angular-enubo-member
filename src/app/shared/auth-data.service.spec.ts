import { TestBed, inject } from '@angular/core/testing';
import { APP_URLS } from '../core/config';
import { AuthDataService } from './auth-data.service';
import { InjectionToken } from '@angular/core';

describe('AuthDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthDataService]
    });
  });

  it('should be created', inject([AuthDataService], (service: AuthDataService) => {
    expect(service).toBeTruthy();
  }));
});
