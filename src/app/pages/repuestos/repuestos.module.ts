import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {RepuestosPageRoutingModule} from './repuestos-routing.module';

import {RepuestosPage} from './repuestos.page';
import {ModalSeleccionPageModule} from './modal-seleccion/modal-seleccion.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RepuestosPageRoutingModule,
        ReactiveFormsModule,
        ModalSeleccionPageModule
    ],
    declarations: [RepuestosPage]
})
export class RepuestosPageModule {
}
