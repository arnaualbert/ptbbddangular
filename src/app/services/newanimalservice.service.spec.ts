import { TestBed } from '@angular/core/testing';

import { NewanimalserviceService } from './newanimalservice.service';

describe('NewanimalserviceService', () => {
  let service: NewanimalserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewanimalserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
