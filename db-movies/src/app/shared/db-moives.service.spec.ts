import { TestBed, inject } from '@angular/core/testing';

import { DbMoivesService } from './db-moives.service';

describe('DbMoivesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DbMoivesService]
    });
  });

  it('should be created', inject([DbMoivesService], (service: DbMoivesService) => {
    expect(service).toBeTruthy();
  }));
});
