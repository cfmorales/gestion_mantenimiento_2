import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ModalReporteFichaPage} from './modal-reporte-ficha/modal-reporte-ficha.page';
import {FormBuilder} from '@angular/forms';

@Component({
    selector: 'app-reportes',
    templateUrl: './reportes.page.html',
    styleUrls: ['./reportes.page.scss'],
})
export class ReportesPage implements OnInit {
    private icons = [
        'cog',
        'clipboard',
        'alert'
    ];
    private titles = [
        'Lista de equipos a hacer mantenimiento',
        'Ejecución del plan',
        'Alerta del Plan'];
    private urls = [
        '/home/reportes-lista',
        '/home/reportes-ejecucion',
        '/home/reportes-alerta'];
    public items: Array<{ title: string; icon: string; url: string }> = [];

    constructor(private modalController: ModalController, private formBuilder: FormBuilder) {
        for (let i = 0; i < this.titles.length; i++) {
            this.items.push({
                title: this.titles[i],
                icon: this.icons[i],
                url: this.urls[i]
            })
            ;
        }
    }

    ngOnInit() {
    }


    async ejecutarModal() {
        const modal = await this.modalController.create({
            component: ModalReporteFichaPage, componentProps: {}
        });
        await modal.present();
    }
}
