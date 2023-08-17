import { TestBed } from '@angular/core/testing';

import { UserCandeactivateService } from './user-candeactivate.service';

describe('UserCandeactivateService', () => {
  let service: UserCandeactivateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCandeactivateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
