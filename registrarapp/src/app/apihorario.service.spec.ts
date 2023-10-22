import { TestBed } from '@angular/core/testing';

import { ApihorarioService } from './apihorario.service';

describe('ApihorarioService', () => {
  let service: ApihorarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApihorarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
