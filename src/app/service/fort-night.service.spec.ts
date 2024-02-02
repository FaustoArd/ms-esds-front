import { TestBed } from '@angular/core/testing';

import { FortNightService } from './fort-night.service';

describe('FortNightService', () => {
  let service: FortNightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FortNightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
