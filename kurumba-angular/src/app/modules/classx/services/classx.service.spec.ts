import { TestBed } from '@angular/core/testing';

import { ClassxService } from './classx.service';

describe('ClassxService', () => {
  let service: ClassxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
