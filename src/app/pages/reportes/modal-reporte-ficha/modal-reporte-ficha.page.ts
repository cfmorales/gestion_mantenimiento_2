import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NavigationExtras, Router} from '@angular/router';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-modal-reporte-ficha',
    templateUrl: './modal-reporte-ficha.page.html',
    styleUrls: ['./modal-reporte-ficha.page.scss'],
})
export class ModalReporteFichaPage implements OnInit {
    private todo: FormGroup;

    constructor(private modalController: ModalController, private formBuilder: FormBuilder, private router: Router) {
        this.todo = this.formBuilder.group({
            ordenId: ['', Validators.required]
        });
    }

    ngOnInit() {
    }

    processForm() {
        let navigationExtras: NavigationExtras = {
            state: {
                ordenId: this.todo.value.ordenId,
            }
        };
        this.router.navigate(['/home/reportes-ficha'], navigationExtras);
        this.modalController.dismiss({
            dismissed: true
        });
    }
}
