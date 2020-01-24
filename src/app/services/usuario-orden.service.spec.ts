import { TestBed } from '@angular/core/testing';

import { UsuarioOrdenService } from './usuario-orden.service';

describe('UsuarioOrdenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuarioOrdenService = TestBed.get(UsuarioOrdenService);
    expect(service).toBeTruthy();
  });
});
