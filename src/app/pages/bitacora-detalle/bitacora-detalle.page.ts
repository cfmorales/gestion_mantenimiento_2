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
                this.tosend = {
                    maquina_id: this.data,
                    token: this.token
                };
                console.log(this.tosend);
                this.getBItacoraData();
            }
        });
    }

    getBItacoraData() {
        this.bitacoraService.bitacoraData(this.tosend).subscribe((res: any) => {
            this.bitacoraDat = res.bitacoraData;
        });
    }

    // async openModal(item) {
    //     const modal = await this.modalController.create({
    //         component: ModalPage,
    //         componentProps: {
    //             item: this.item
    //         }
    //     });
    //     await modal.present();
    //     console.log(item);
    // }

    ngOnInit() {
    }
}
