import { TestBed } from '@angular/core/testing';

import { LlenardbService } from './llenardb.service';

describe('LlenardbService', () => {
  let service: LlenardbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LlenardbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
