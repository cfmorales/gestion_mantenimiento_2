import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarjetaDeEquipoPageRoutingModule } from './tarjeta-de-equipo-routing.module';

import { TarjetaDeEquipoPage } from './tarjeta-de-equipo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarjetaDeEquipoPageRoutingModule
  ],
  declarations: [TarjetaDeEquipoPage]
})
export class TarjetaDeEquipoPageModule {}
