import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {MaquinaService} from 'src/app/services/maquina.service';

import {ToastService} from '../../services/toast.service';
import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-orden-trabajo-header',
    templateUrl: './orden-trabajo-header.page.html',
    styleUrls: ['./orden-trabajo-header.page.scss'],
})
export class OrdenTrabajoHeaderPage implements OnInit {
    public authUser: any;
    public maquinaData: any;
    slcMaquina = '';
    public postData;

    public especialidad = [
        {tipo: 'Mecánica', isChecked: false, val: '1'},
        {tipo: 'Eléctrica', isChecked: false, val: '2'},
        {tipo: 'Control', isChecked: false, val: '3'}
    ];
    public prioridad = [
        {tipo: 'Emergente', isChecked: false, val: '1'},
        {tipo: 'Urgente', isChecked: false, val: '2'},
        {tipo: 'Programable', isChecked: false, val: '3'}
    ];
    public mant = [
        {tipo: 'Correctivo', isChecked: false, val: '1'},
        {tipo: 'Preventivo', isChecked: false, val: '2'},
        {tipo: 'Horas', isChecked: false, val: '3'}
    ];

    constructor(private auth: AuthService,
                private toastService: ToastService,
                private maquinaService: MaquinaService,
                private router: Router) {
    }

    ngOnInit() {
        this.auth.userData$.subscribe((res: any) => {
            this.authUser = res;
        });
        this.postData = {token: this.authUser.token + 'a'};
        if (this.postData) {
            this.maquinaService.maquinaData(this.postData).subscribe((res: any) => {
                this.maquinaData = res.maquinaData;
                // console.log(this.maquinaData);
            });
        }
    }

    guardarDatos() {

        this.toastService.presentToastColor('Los datos se guardaron con el ID 4.', 'light');

        // tslint:disable-next-line:only-arrow-functions
        window.setTimeout(function() {
            location.reload();
        }, 1000);
    }

}
