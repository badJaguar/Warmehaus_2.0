import { TestBed } from '@angular/core/testing';

import { BreadcrumbRoutesService } from './breadcrumb-routes.service';

describe('BreadcrumbRoutesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BreadcrumbRoutesService = TestBed.get(BreadcrumbRoutesService);
    expect(service).toBeTruthy();
  });
});
