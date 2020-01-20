import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {BitacoraDetallePage} from './bitacora-detalle.page';
import {ModalPageModule} from './modal/modal.module';


const routes: Routes = [
    {
        path: '',
        component: BitacoraDetallePage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        // ModalPageModule,
        RouterModule.forChild(routes)
    ],
    declarations: [BitacoraDetallePage],
    entryComponents: [BitacoraDetallePage],
})
export class BitacoraDetallePageModule {
}
