import { TestBed } from '@angular/core/testing';

import { TraducirService } from './traducir.service';

describe('TraducirService', () => {
  let service: TraducirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraducirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
