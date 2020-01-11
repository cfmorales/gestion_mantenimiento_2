import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlanificadorPage } from './planificador.page';

describe('PlanificadorPage', () => {
  let component: PlanificadorPage;
  let fixture: ComponentFixture<PlanificadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanificadorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlanificadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
