import {Component, OnInit} from '@angular/core';
import {ToastService} from './../../services/toast.service';
import {AuthService} from '../../services/auth.service';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {ModalController} from '@ionic/angular';
import {ModalSeleccionPage} from './modal-seleccion/modal-seleccion.page';

@Component({
    selector: 'app-repuestos',
    templateUrl: './repuestos.page.html',
    styleUrls: ['./repuestos.page.scss'],
})
export class RepuestosPage implements OnInit {

    constructor(private auth: AuthService,
                private toastService: ToastService, private formBuilder: FormBuilder,
                private modalController: ModalController) {
        this.todo = this.formBuilder.group({
            ingreso: ['', Validators.required],
            caso: ['', Validators.required]
        });
    }

    private todo: FormGroup;

    ngOnInit() {
    }


    async processForm() {
        console.log(this.todo.value);
        const modal = await this.modalController.create({
            component: ModalSeleccionPage, componentProps: {
                caso: this.todo.value.caso,
                ingreso: this.todo.value.ingreso
            }
        });
        await modal.present();
    }
}
