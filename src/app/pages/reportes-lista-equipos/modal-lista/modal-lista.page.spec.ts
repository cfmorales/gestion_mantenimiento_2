import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalListaPage } from './modal-lista.page';

describe('ModalListaPage', () => {
  let component: ModalListaPage;
  let fixture: ComponentFixture<ModalListaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalListaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
