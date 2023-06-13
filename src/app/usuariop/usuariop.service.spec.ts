import { TestBed } from '@angular/core/testing';

import { UsuariopService } from './usuariop.service';

describe('UsuariopService', () => {
  let service: UsuariopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
