import { TestBed } from '@angular/core/testing';

import { JavaServiceService } from './java-service.service';

describe('JavaServiceService', () => {
  let service: JavaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JavaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
