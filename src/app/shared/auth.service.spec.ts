import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AuthDataService } from './auth-data.service';
import { RoutesService } from '../core/routes.service';
import { HttpModule } from '@angular/http';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            HttpModule,
        ],
      providers: [AuthService, AuthDataService, RoutesService]
    });
  });

  // it('should be created', inject([AuthService], (service: AuthService) => {
  //   expect(service).toBeTruthy();
  // }));
});
