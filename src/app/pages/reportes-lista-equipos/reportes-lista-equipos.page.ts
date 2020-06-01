import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {ModalController} from '@ionic/angular';
import {ModalListaPage} from './modal-lista/modal-lista.page';
import {MaquinaService} from '../../services/maquina.service';


@Component({
    selector: 'app-reportes-lista-equipos',
    templateUrl: './reportes-lista-equipos.page.html',
    styleUrls: ['./reportes-lista-equipos.page.scss'],
})
export class ReportesListaEquiposPage implements OnInit {
    public maquinaData: any;
    public authUser: any;
    public postData;

    constructor(private auth: AuthService,
                private formBuilder: FormBuilder,
                private maquinaService: MaquinaService,
                private modalController: ModalController) {
        this.todo = this.formBuilder.group({
            ingreso: ['', Validators.required]
        });
    }

    public todo: FormGroup;

    ngOnInit() {
        this.auth.userData$.subscribe((res: any) => {
            this.authUser = res;
            this.postData = {token: this.authUser.token};
            if (this.postData) {
                this.maquinaService.maquinaData(this.postData).subscribe((res2: any) => {
                    this.maquinaData = res2.maquinaData;
                });
            }
        });
    }

    async processForm() {
        console.log(this.todo.value);
        const modal = await this.modalController.create({
            component: ModalListaPage, componentProps: {
                maquina_id: this.todo.value.ingreso
            }
        });
        await modal.present();
    }

}
