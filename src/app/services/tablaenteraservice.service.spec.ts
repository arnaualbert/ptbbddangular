import { TestBed } from '@angular/core/testing';

import { TablaenteraserviceService } from './tablaenteraservice.service';

describe('TablaenteraserviceService', () => {
  let service: TablaenteraserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaenteraserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
