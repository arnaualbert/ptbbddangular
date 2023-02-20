import { TestBed } from '@angular/core/testing';

import { NoentryGuard } from './noentry.guard';

describe('NoentryGuard', () => {
  let guard: NoentryGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoentryGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
