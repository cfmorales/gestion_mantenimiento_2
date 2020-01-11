import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: 'list.page.html',
    styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
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

    // add back when alpha.4 is out
    // navigate(item) {
    //   this.router.navigate(['/list', JSON.stringify(item)]);
    // }
}
