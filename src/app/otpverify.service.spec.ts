import { TestBed } from '@angular/core/testing';

import { OtpverifyService } from './otpverify.service';

describe('OtpverifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OtpverifyService = TestBed.get(OtpverifyService);
    expect(service).toBeTruthy();
  });
});
