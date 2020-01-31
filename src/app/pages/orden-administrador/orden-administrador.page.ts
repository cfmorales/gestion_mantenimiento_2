import {Component, OnInit} from '@angular/core';
import {AlertService} from '../../services/alert.service';

@Component({
    selector: 'app-orden-administrador',
    templateUrl: './orden-administrador.page.html',
    styleUrls: ['./orden-administrador.page.scss'],
})
export class OrdenAdministradorPage implements OnInit {

    constructor(private alertSerivce: AlertService) {
    }

    ngOnInit() {
    }

    alertaRango() {
        this.alertSerivce
            .presentAlertPrompt('Establecer rangos', 'Ingrese el rango en números enteros')
            .then((res: any) => {
                if (res.role === 'okay') {

                }
            });
    }
}
