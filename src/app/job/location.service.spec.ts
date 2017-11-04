import { TestBed, inject } from '@angular/core/testing';

import { LocationService } from './location.service';
import { RoutesService } from '../core/routes.service';
import { Http, HttpModule } from '@angular/http';

describe('LocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            HttpModule,
        ],
      providers: [LocationService, RoutesService]
    });
  });

  it('should be created', inject([LocationService], (service: LocationService) => {
    expect(service).toBeTruthy();
  }));
});
