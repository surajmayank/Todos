import { TestBed } from '@angular/core/testing';

import { WlcomeDataService } from './wlcome-data.service';

describe('WlcomeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WlcomeDataService = TestBed.get(WlcomeDataService);
    expect(service).toBeTruthy();
  });
});
