import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-reportes',
    templateUrl: './reportes.page.html',
    styleUrls: ['./reportes.page.scss'],
})
export class ReportesPage implements OnInit {
    private icons = [
        'cog',
        'clipboard',
        'alert',
        'attach'
    ];
    private titles = [
        'Lista de equipos a hacer mantenimiento',
        'Ejecución del plan',
        'Alerta del Plan',
        'Ficha de ejecución del mantenimiento'];
    private urls = [
        '/home/reportes-lista',
        '/home/reportes-ejecucion',
        '/home/reportes-alerta',
        '/home/reportes-ficha'];
    public items: Array<{ title: string; note: string; icon: string; url: string }> = [];

    constructor() {
        for (let i = 0; i < this.titles.length; i++) {
            this.items.push({
                title: this.titles[i],
                note: 'Comentario',
                icon: this.icons[i],
                url: this.urls[i]
            })
            ;
        }
    }

    ngOnInit() {
    }

}
