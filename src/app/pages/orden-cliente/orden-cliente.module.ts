import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdenClientePageRoutingModule } from './orden-cliente-routing.module';

import { OrdenClientePage } from './orden-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdenClientePageRoutingModule
  ],
  declarations: [OrdenClientePage]
})
export class OrdenClientePageModule {}
