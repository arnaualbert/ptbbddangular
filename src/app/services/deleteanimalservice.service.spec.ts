import { TestBed } from '@angular/core/testing';

import { DeleteanimalserviceService } from './deleteanimalservice.service';

describe('DeleteanimalserviceService', () => {
  let service: DeleteanimalserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteanimalserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
