import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TarjetaDeEquipoPage } from './tarjeta-de-equipo.page';

describe('TarjetaDeEquipoPage', () => {
  let component: TarjetaDeEquipoPage;
  let fixture: ComponentFixture<TarjetaDeEquipoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaDeEquipoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetaDeEquipoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
