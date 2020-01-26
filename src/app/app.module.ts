import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ModalPageModule} from './pages/bitacora-detalle/modal/modal.module';
import {ModalListaPageModule} from './pages/reportes-lista-equipos/modal-lista/modal-lista.module';
import {ModalEjecucionPageModule} from './pages/reportes-ejecucion/modal-ejecucion/modal-ejecucion.module';
// import {EditModalPageModule} from './pages/planificador/edit-modal/edit-modal.module';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        ModalPageModule,
        // EditModalPageModule,
        ModalListaPageModule,
        ModalEjecucionPageModule,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        HttpClientModule,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
