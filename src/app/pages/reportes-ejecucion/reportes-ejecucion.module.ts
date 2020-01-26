import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {ReportesEjecucionPage} from './reportes-ejecucion.page';

const routes: Routes = [
    {
        path: '',
        component: ReportesEjecucionPage
    }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
    declarations: [ReportesEjecucionPage]
})
export class ReportesEjecucionPageModule {
}
