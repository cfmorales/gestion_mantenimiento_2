import {Component, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {AuthService} from '../../../services/auth.service';
import {PlanificadorService} from '../../../services/planificador.service';

import {NavigationExtras, Router} from '@angular/router';

@Component({
    selector: 'app-modal-alerta',
    templateUrl: './modal-alerta.page.html',
    styleUrls: ['./modal-alerta.page.scss'],
})
export class ModalAlertaPage implements OnInit {
    desde;
    hasta;
    public authUser: any;
    public planificadorData: any;
    public postData;
    public visblePLanificadorData = [];

    constructor(public navParams: NavParams,
                private auth: AuthService,
                private planificadorService: PlanificadorService,
                private router: Router,
                private modalController: ModalController) {
    }

    ngOnInit() {
        this.desde = new Date(this.navParams.get('desde'));
        this.hasta = new Date(this.navParams.get('hasta'));
        this.desde.setHours(0, 0, 0, 0);
        this.hasta.setHours(0, 0, 0, 0);
        this.auth.userData$.subscribe((res: any) => {
            this.authUser = res;
            this.postData = {token: this.authUser.token};
            if (this.postData) {
                this.planificadorService.planificadorData(this.postData).subscribe((res2: any) => {
                    this.planificadorData = res2.planificadorData;
                    this.planificadorData.forEach(item => {
                        if (item.fecha !== '' && item.estado === 'Pendiente') {
                            const fechaPlan = new Date(item.fecha);
                            if (fechaPlan.getTime() >= this.desde.getTime() &&
                                fechaPlan.getTime() <= this.hasta.getTime()) {
                                this.visblePLanificadorData.push(item);
                            }
                        }
                    });
                });
            }

        });
    }

    private cambioPaginas(item) {
        console.log(this.navParams.get('especialidad'));
        const navigationExtras: NavigationExtras = {
            state: {
                verifMan: this.navParams.get('verifMan'),
                especialidad: this.navParams.get('especialidad'),
                prioridad: this.navParams.get('prioridad'),
                mant: this.navParams.get('mant'),
                authUser: this.authUser,
                orden: item
            }
        };
        this.modalController.dismiss({
            dismissed: true
        });
        this.router.navigate(['home/orden-trabajo-general'], navigationExtras);
    }

}
