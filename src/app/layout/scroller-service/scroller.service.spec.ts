import { TestBed } from '@angular/core/testing';

import { ScrollerServiceService } from './scroller-service.service';

describe('ScrollerServiceService', () => {
  let service: ScrollerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
