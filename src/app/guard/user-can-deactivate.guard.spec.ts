import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { userCanDeactivateGuard } from './user-can-deactivate.guard';

describe('userCanDeactivateGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => userCanDeactivateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
