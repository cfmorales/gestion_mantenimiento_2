import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrdenAdministradorPage } from './orden-administrador.page';

describe('OrdenAdministradorPage', () => {
  let component: OrdenAdministradorPage;
  let fixture: ComponentFixture<OrdenAdministradorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenAdministradorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrdenAdministradorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
