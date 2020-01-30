import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ReportesListaEquiposPage} from './reportes-lista-equipos.page';

const routes: Routes = [
    {
        path: '',
        component: ReportesListaEquiposPage
    },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ReportesListaEquiposPageRoutingModule {
}