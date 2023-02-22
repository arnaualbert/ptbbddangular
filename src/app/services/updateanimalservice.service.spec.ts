import { TestBed } from '@angular/core/testing';

import { UpdateanimalserviceService } from './updateanimalservice.service';

describe('UpdateanimalserviceService', () => {
  let service: UpdateanimalserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateanimalserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
