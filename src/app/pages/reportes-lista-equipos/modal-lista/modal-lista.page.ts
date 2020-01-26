import {Component, OnInit} from '@angular/core';
import {NavParams} from '@ionic/angular';
import {PlanificadorService} from 'src/app/services/planificador.service';
import {AuthService} from '../../../services/auth.service';

@Component({
    selector: 'app-modal-lista',
    templateUrl: './modal-lista.page.html',
    styleUrls: ['./modal-lista.page.scss'],
})
export class ModalListaPage implements OnInit {
    public authUser: any;
    public planificadorData: any;
    public postData;
    idMaquina;

    constructor(public navParams: NavParams,
                private auth: AuthService,
                private planificadorService: PlanificadorService) {
    }


    ngOnInit() {
        this.idMaquina = this.navParams.get('maquina_id');
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

}
