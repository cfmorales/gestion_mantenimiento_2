import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let statusBarSpy, splashScreenSpy, platformReadySpy, platformSpy;

  beforeEach(async(() => {
    statusBarSpy = jasmine.createSpyObj('StatusBar', ['styleDefault']);
    splashScreenSpy = jasmine.createSpyObj('SplashScreen', ['hide']);
    platformReadySpy = Promise.resolve();
    platformSpy = jasmine.createSpyObj('Platform', { ready: platformReadySpy });

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: StatusBar, useValue: statusBarSpy },
        { provide: SplashScreen, useValue: splashScreenSpy },
        { provide: Platform, useValue: platformSpy },
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should initialize the app', async () => {
    TestBed.createComponent(AppComponent);
    expect(platformSpy.ready).toHaveBeenCalled();
    await platformReadySpy;
    expect(statusBarSpy.styleDefault).toHaveBeenCalled();
    expect(splashScreenSpy.hide).toHaveBeenCalled();
  });

  it('should have menu labels', async () => {
    const fixture = await TestBed.createComponent(AppComponent);
    await fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll('ion-label');
    expect(menuItems.length).toEqual(7);
    // expect(menuItems[0].textContent).toContain('Home');
    expect(menuItems[1].textContent).toContain('Orden de trabajo administrador');
    expect(menuItems[2].textContent).toContain('Planificador');
    expect(menuItems[3].textContent).toContain('Orden de trabajo Cliente');
    expect(menuItems[4].textContent).toContain('Bitácora de máquina');
    expect(menuItems[5].textContent).toContain('Módulo de repuestos');
    expect(menuItems[6].textContent).toContain('Módulo de reportes');
  });

  it('should have urls', async () => {
    const fixture = await TestBed.createComponent(AppComponent);
    await fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll('ion-item');
    expect(menuItems.length).toEqual(7);
    // expect(menuItems[0].getAttribute('ng-reflect-router-link')).toEqual('/home');
    expect(menuItems[1].getAttribute('ng-reflect-router-link')).toEqual('/home/orden-administrador');
    expect(menuItems[2].getAttribute('ng-reflect-router-link')).toEqual('/home/planificador');
    expect(menuItems[3].getAttribute('ng-reflect-router-link')).toEqual('/home/orden-cliente');
    expect(menuItems[4].getAttribute('ng-reflect-router-link')).toEqual('/home/bitacora');
    expect(menuItems[5].getAttribute('ng-reflect-router-link')).toEqual('/home/repuestos');
    expect(menuItems[6].getAttribute('ng-reflect-router-link')).toEqual('/home/list');
  });
  // TODO: add more tests!

});
