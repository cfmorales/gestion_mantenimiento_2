import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrdenClientePage } from './orden-cliente.page';

describe('OrdenClientePage', () => {
  let component: OrdenClientePage;
  let fixture: ComponentFixture<OrdenClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenClientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrdenClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
