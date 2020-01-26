import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesAlertaPage } from './reportes-alerta.page';

describe('ReportesAlertaPage', () => {
  let component: ReportesAlertaPage;
  let fixture: ComponentFixture<ReportesAlertaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesAlertaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesAlertaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
