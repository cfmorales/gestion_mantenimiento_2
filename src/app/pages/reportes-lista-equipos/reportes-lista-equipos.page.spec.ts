import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesListaEquiposPage } from './reportes-lista-equipos.page';

describe('ReportesListaEquiposPage', () => {
  let component: ReportesListaEquiposPage;
  let fixture: ComponentFixture<ReportesListaEquiposPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesListaEquiposPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesListaEquiposPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
