import { TestBed } from '@angular/core/testing';

import { HtttpIntercepterBasicAuthService } from './htttp-intercepter-basic-auth.service';

describe('HtttpIntercepterBasicAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HtttpIntercepterBasicAuthService = TestBed.get(HtttpIntercepterBasicAuthService);
    expect(service).toBeTruthy();
  });
});
