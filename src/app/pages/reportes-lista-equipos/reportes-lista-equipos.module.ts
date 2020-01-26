import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {ReportesListaEquiposPage} from './reportes-lista-equipos.page';
import {ReportesListaEquiposPageRoutingModule} from './reportes-lista-equipos-routing.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
        ReportesListaEquiposPageRoutingModule,
    ],
    declarations: [ReportesListaEquiposPage]
})
export class ReportesListaEquiposPageModule {
}
