import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesEjecucionPage } from './reportes-ejecucion.page';

describe('ReportesEjecucionPage', () => {
  let component: ReportesEjecucionPage;
  let fixture: ComponentFixture<ReportesEjecucionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesEjecucionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesEjecucionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
