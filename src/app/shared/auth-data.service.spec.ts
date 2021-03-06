import { TestBed, inject } from '@angular/core/testing';
import { AuthDataService } from './auth-data.service';
import { RoutesService } from '../core/routes.service';
import { HttpModule } from '@angular/http';

describe('AuthDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
             HttpModule,
        ],
      providers: [AuthDataService, RoutesService]
    });
  });

  it('should be created', inject([AuthDataService], (service: AuthDataService) => {
    expect(service).toBeTruthy();
  }));
});
