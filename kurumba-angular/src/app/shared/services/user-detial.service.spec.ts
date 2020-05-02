import { TestBed } from '@angular/core/testing';

import { UserDetialService } from './user-detial.service';

describe('UserDetialService', () => {
  let service: UserDetialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDetialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
