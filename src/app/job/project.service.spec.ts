import { TestBed, inject } from '@angular/core/testing';

import { ProjectService } from './project.service';
import { RoutesService } from '../core/routes.service';
import { HttpModule } from '@angular/http';

describe('ProjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            HttpModule,
        ],
      providers: [ProjectService, RoutesService]
    });
  });

  it('should be created', inject([ProjectService], (service: ProjectService) => {
    expect(service).toBeTruthy();
  }));
});
