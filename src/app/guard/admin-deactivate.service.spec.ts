import { TestBed } from '@angular/core/testing';

import { AdminDeactivateService } from './admin-deactivate.service';

describe('AdminDeactivateService', () => {
  let service: AdminDeactivateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminDeactivateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
