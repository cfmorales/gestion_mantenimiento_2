import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BitacoraService} from 'src/app/services/bitacora.service';
import {AuthService} from './../../services/auth.service';
import {ToastService} from './../../services/toast.service';
import {ModalController} from '@ionic/angular';
import {ModalPage} from './modal/modal.page';

@Component({
    selector: 'app-bitacora-detalle',
    templateUrl: './bitacora-detalle.page.html',
    styleUrls: ['./bitacora-detalle.page.scss'],
})
export class BitacoraDetallePage implements OnInit {
    data: any;
    token: any;
    desde: any;
    hasta: any;
    tosend = {};
    bitacoraDat: any;
    item: any;

    constructor(
        private  route: ActivatedRoute,
        private router: Router,
        private bitacoraService: BitacoraService,
        private modalController: ModalController) {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.data = this.router.getCurrentNavigation().extras.state.maquina_id;
                this.token = this.router.getCurrentNavigation().extras.state.token;
                this.desde = this.router.getCurrentNavigation().extras.state.desde;
                this.hasta = this.router.getCurrentNavigation().extras.state.hasta;

                this.tosend = {
                    maquina_id: this.data,
                    token: this.token,
                    desde: this.desde,
                    hasta: this.hasta
                };
                // console.log(this.tosend);
                this.getBItacoraData();
            }
        });
    }

    getBItacoraData() {
        this.bitacoraService.bitacoraData(this.tosend).subscribe((res: any) => {
            this.bitacoraDat = res.bitacoraData;
        });
    }

    async openModal(item2) {
        console.log('item bit' + item2.descripcion);

        const modal = await this.modalController.create({
            component: ModalPage,
            componentProps: {
                item: item2
            }
        });
        await modal.present();
    }

    ngOnInit() {
    }
}
