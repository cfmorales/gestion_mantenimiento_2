import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdenAdministradorPage } from './orden-administrador.page';

const routes: Routes = [
  {
    path: '',
    component: OrdenAdministradorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdenAdministradorPageRoutingModule {}
