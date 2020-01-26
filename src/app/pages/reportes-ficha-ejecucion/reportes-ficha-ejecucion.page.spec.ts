import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesFichaEjecucionPage } from './reportes-ficha-ejecucion.page';

describe('ReportesFichaEjecucionPage', () => {
  let component: ReportesFichaEjecucionPage;
  let fixture: ComponentFixture<ReportesFichaEjecucionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesFichaEjecucionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesFichaEjecucionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
