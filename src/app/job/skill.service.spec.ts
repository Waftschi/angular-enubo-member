import { TestBed, inject } from '@angular/core/testing';

import { SkillService } from './skill.service';
import { RoutesService } from '../core/routes.service';
import { HttpModule } from '@angular/http';

describe('SkillService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            HttpModule,
        ],
      providers: [SkillService, RoutesService]
    });
  });

  it('should be created', inject([SkillService], (service: SkillService) => {
    expect(service).toBeTruthy();
  }));
});
