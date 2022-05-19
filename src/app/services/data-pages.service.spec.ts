import { TestBed } from '@angular/core/testing';

import { DataPagesService } from './data-pages.service';

describe('DataPagesService', () => {
  let service: DataPagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
