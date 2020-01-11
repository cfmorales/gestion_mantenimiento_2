import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    private selectedItem: any;
    private icons = [
        'cog',
        'clipboard',
        'alert',
        'attach'
    ];
    private titles = [
        'Lista de repuestos a hacer mantenimiento',
        'Ejecución del plan',
        'Alerta del Plan',
        'Ficha de ejecución del mantenimiento'];
    public items: Array<{ title: string; note: string; icon: string }> = [];

    constructor() {
        for (let i = 0; i < this.titles.length; i++) {
            this.items.push({
                title: this.titles[i],
                note: 'Comentario',
                icon: this.icons[i]
            });
        }
    }

    ngOnInit() {
    }

}
