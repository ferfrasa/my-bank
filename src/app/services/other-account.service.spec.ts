import { TestBed } from '@angular/core/testing';

import { OtherAccountService } from './other-account.service';

describe('OtherAccountService', () => {
  let service: OtherAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtherAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
