import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {PlanificadorPageRoutingModule} from './planificador-routing.module';

import {PlanificadorPage} from './planificador.page';
import {EditModalPageModule} from './edit-modal/edit-modal.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PlanificadorPageRoutingModule,
        EditModalPageModule,

    ],
    declarations: [PlanificadorPage]
})
export class PlanificadorPageModule {
}
