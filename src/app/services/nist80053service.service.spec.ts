import { TestBed } from '@angular/core/testing';

import { Nist80053serviceService } from './nist80053service.service';

describe('Nist80053serviceService', () => {
  let service: Nist80053serviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Nist80053serviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
