import { TestBed } from '@angular/core/testing';

import { MetronomService } from './metronom.service';

describe('MetronomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetronomService = TestBed.get(MetronomService);
    expect(service).toBeTruthy();
  });
});
