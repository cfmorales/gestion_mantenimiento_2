import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitacoraDetallePage } from './bitacora-detalle.page';

describe('BitacoraDetallePage', () => {
  let component: BitacoraDetallePage;
  let fixture: ComponentFixture<BitacoraDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitacoraDetallePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitacoraDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
