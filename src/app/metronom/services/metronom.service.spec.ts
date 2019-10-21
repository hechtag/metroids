import { TestBed } from '@angular/core/testing';

import { MetronomService } from './metronom.service';

describe('MetronomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetronomService = TestBed.get(MetronomService);
    expect(service).toBeTruthy();
  });

  it('should convert bpm to miliseconds', () => {
    const service: MetronomService = TestBed.get(MetronomService);
    expect(service.bpmToMiliseconds(30)).toBe(2000)
    expect(service.bpmToMiliseconds(60)).toBe(1000)
  });


});
