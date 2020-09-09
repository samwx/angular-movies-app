import { TestBed } from '@angular/core/testing';

import { MoviesStoreService } from './movies-store.service';

describe('MoviesStoreService', () => {
  let service: MoviesStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
