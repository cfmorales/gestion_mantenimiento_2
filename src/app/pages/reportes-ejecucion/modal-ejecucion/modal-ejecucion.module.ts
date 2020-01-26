import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalEjecucionPage } from './modal-ejecucion.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEjecucionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalEjecucionPage]
})
export class ModalEjecucionPageModule {}
