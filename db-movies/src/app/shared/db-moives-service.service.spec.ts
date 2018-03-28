import { TestBed, inject } from '@angular/core/testing';

import { DbMoivesServiceService } from './db-moives-service.service';

describe('DbMoivesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DbMoivesServiceService]
    });
  });

  it('should be created', inject([DbMoivesServiceService], (service: DbMoivesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
