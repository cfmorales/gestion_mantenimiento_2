import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAlertaPage } from './modal-alerta.page';

describe('ModalAlertaPage', () => {
  let component: ModalAlertaPage;
  let fixture: ComponentFixture<ModalAlertaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAlertaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAlertaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
