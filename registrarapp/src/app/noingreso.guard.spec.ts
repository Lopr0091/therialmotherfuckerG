import { TestBed } from '@angular/core/testing';

import { NoingresoGuard } from './noingreso.guard';

describe('NoingresoGuard', () => {
  let guard: NoingresoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoingresoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
