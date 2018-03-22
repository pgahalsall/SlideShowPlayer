import { TestBed, inject } from '@angular/core/testing';

import { SlideGuardService } from './slide-guard.service';

describe('SlideGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlideGuardService]
    });
  });

  it('should be created', inject([SlideGuardService], (service: SlideGuardService) => {
    expect(service).toBeTruthy();
  }));
});
