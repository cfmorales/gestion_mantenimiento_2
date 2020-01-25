import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenTrabajoGeneralPage } from './orden-trabajo-general.page';

describe('OrdenTrabajoGeneralPage', () => {
  let component: OrdenTrabajoGeneralPage;
  let fixture: ComponentFixture<OrdenTrabajoGeneralPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenTrabajoGeneralPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenTrabajoGeneralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
