import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdenClientePage } from './orden-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: OrdenClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdenClientePageRoutingModule {}
