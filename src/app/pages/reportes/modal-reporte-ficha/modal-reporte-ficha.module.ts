import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalReporteFichaPage } from './modal-reporte-ficha.page';

const routes: Routes = [
  {
    path: '',
    component: ModalReporteFichaPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule
    ],
  declarations: [ModalReporteFichaPage]
})
export class ModalReporteFichaPageModule {}
