import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanificadorPage } from './planificador.page';

const routes: Routes = [
  {
    path: '',
    component: PlanificadorPage
  },  { path: 'edit-modal', loadChildren: './edit-modal/edit-modal.module#EditModalPageModule' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanificadorPageRoutingModule {}
