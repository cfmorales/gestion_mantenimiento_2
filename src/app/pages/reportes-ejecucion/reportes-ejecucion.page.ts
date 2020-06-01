import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModalController} from '@ionic/angular';
import {ModalEjecucionPage} from './modal-ejecucion/modal-ejecucion.page';

@Component({
    selector: 'app-reportes-ejecucion',
    templateUrl: './reportes-ejecucion.page.html',
    styleUrls: ['./reportes-ejecucion.page.scss'],
})
export class ReportesEjecucionPage implements OnInit {
    public todo: FormGroup;


    constructor(private formBuilder: FormBuilder,
                private modalController: ModalController) {
        this.todo = this.formBuilder.group({
            desde: ['', Validators.required],
            hasta: ['', Validators.required]
        });
    }

    ngOnInit() {

    }

    async processForm() {
        console.log(this.todo.value);
        const modal = await this.modalController.create({
            component: ModalEjecucionPage, componentProps: {
                desde: this.todo.value.desde,
                hasta: this.todo.value.hasta
            }
        });
        await modal.present();
    }

}
