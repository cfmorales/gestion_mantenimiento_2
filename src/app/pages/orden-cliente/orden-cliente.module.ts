import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdenClientePageRoutingModule } from './orden-cliente-routing.module';

import { OrdenClientePage } from './orden-cliente.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdenClientePageRoutingModule,
      ComponentsModule
  ],
  declarations: [OrdenClientePage]
})
export class OrdenClientePageModule {}
