import { TestBed, inject } from '@angular/core/testing';

import { CripServiceService } from './crip-service.service';

describe('CripServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CripServiceService]
    });
  });

  it('should be created', inject([CripServiceService], (service: CripServiceService) => {
    expect(service).toBeTruthy();
  }));
});
