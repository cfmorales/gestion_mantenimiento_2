import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarjetaDeEquipoPage } from './tarjeta-de-equipo.page';

const routes: Routes = [
  {
    path: '',
    component: TarjetaDeEquipoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarjetaDeEquipoPageRoutingModule {}
