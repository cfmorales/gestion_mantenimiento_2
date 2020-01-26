import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {ToastService} from '../../services/toast.service';
import {Router} from '@angular/router';
import {PlanificadorService} from 'src/app/services/planificador.service';
import {EditModalPage} from './edit-modal/edit-modal.page';
import {ModalController} from '@ionic/angular';


@Component({
    selector: 'app-planificador',
    templateUrl: './planificador.page.html',
    styleUrls: ['./planificador.page.scss'],
})
export class PlanificadorPage implements OnInit {
    public authUser: any;
    public planificadorData: any;
    public postData;

    constructor(private auth: AuthService,
                private toastService: ToastService,
                private router: Router,
                private planificadorService: PlanificadorService,
                private modalController: ModalController) {
    }

    ngOnInit() {

        this.auth.userData$.subscribe((res: any) => {
            this.authUser = res;
            this.postData = {token: this.authUser.token};
            if (this.postData) {
                this.planificadorService.planificadorData(this.postData).subscribe((res2: any) => {
                    this.planificadorData = res2.planificadorData;
                });
            }

        });

    }

    // tslint:disable-next-line:variable-name
    async openModal(titulo, data, number: number) {
        const modal = await this.modalController.create({
            component: EditModalPage, componentProps: {
                titulo,
                data,
                number
            }
        });
        await modal.present();
    }

}
