import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RepuestosPage } from './repuestos.page';

describe('RepuestosPage', () => {
  let component: RepuestosPage;
  let fixture: ComponentFixture<RepuestosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepuestosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RepuestosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
