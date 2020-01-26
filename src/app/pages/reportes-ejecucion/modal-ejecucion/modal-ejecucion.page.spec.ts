import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEjecucionPage } from './modal-ejecucion.page';

describe('ModalEjecucionPage', () => {
  let component: ModalEjecucionPage;
  let fixture: ComponentFixture<ModalEjecucionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEjecucionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEjecucionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
