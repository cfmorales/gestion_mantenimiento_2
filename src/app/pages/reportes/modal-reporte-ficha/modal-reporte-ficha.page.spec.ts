import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReporteFichaPage } from './modal-reporte-ficha.page';

describe('ModalReporteFichaPage', () => {
  let component: ModalReporteFichaPage;
  let fixture: ComponentFixture<ModalReporteFichaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalReporteFichaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalReporteFichaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
