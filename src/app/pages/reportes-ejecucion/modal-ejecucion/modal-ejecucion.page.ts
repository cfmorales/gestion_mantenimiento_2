import {Component, OnInit} from '@angular/core';
import {NavParams} from '@ionic/angular';
import {AuthService} from '../../../services/auth.service';
import {PlanificadorService} from '../../../services/planificador.service';
import has = Reflect.has;

@Component({
    selector: 'app-modal-ejecucion',
    templateUrl: './modal-ejecucion.page.html',
    styleUrls: ['./modal-ejecucion.page.scss'],
})
export class ModalEjecucionPage implements OnInit {

    constructor(public navParams: NavParams,
                private auth: AuthService,
                private planificadorService: PlanificadorService) {
    }

    desde;
    hasta;
    public authUser: any;
    public planificadorData: any;
    public postData;
    public visblePLanificadorData = [];

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
                        if (item.fecha !== '') {
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

}
