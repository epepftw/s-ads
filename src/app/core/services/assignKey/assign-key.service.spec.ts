import { TestBed } from '@angular/core/testing';

import { AssignKeyService } from './assign-key.service';

describe('AssignKeyService', () => {
  let service: AssignKeyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignKeyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
