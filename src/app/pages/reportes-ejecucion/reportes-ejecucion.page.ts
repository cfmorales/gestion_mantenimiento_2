import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
    selector: 'app-reportes-ejecucion',
    templateUrl: './reportes-ejecucion.page.html',
    styleUrls: ['./reportes-ejecucion.page.scss'],
})
export class ReportesEjecucionPage implements OnInit {
    private todo: FormGroup;


    constructor(private formBuilder: FormBuilder) {
        this.todo = this.formBuilder.group({
            desde: ['', Validators.required],
            hasta: ['', Validators.required]
        });
    }

    ngOnInit() {

    }

    async processForm() {
        console.log(this.todo.value);
        // const modal = await this.modalController.create({
        //     component: ModalSeleccionPage, componentProps: {
        //         caso: this.todo.value.caso,
        //         ingreso: this.todo.value.ingreso
        //     }
        // });
        // await modal.present();
    }

}
