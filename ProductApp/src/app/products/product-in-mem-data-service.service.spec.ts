import { TestBed } from '@angular/core/testing';

import { ProductInMemDataServiceService } from './product-in-mem-data-service.service';

describe('ProductInMemDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductInMemDataServiceService = TestBed.get(ProductInMemDataServiceService);
    expect(service).toBeTruthy();
  });
});
