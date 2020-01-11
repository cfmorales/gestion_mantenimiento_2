import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdenAdministradorPageRoutingModule } from './orden-administrador-routing.module';

import { OrdenAdministradorPage } from './orden-administrador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdenAdministradorPageRoutingModule
  ],
  declarations: [OrdenAdministradorPage]
})
export class OrdenAdministradorPageModule {}
