import {Component, OnInit} from '@angular/core';
import {NavParams} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RepuestoService} from '../../../services/repuesto.service';
import {AuthService} from '../../../services/auth.service';

@Component({
    selector: 'app-modal-seleccion',
    templateUrl: './modal-seleccion.page.html',
    styleUrls: ['./modal-seleccion.page.scss'],
})
export class ModalSeleccionPage implements OnInit {

    constructor(public navParams: NavParams, private formBuilder: FormBuilder,
                private repuestoService: RepuestoService, private auth: AuthService) {
        this.todo = this.formBuilder.group({
            codigo: ['', Validators.required],
            repuesto: ['', Validators.required],
            cantidad: ['', Validators.required],

        });
    }

    public repuestoData: any;
    public postData;
    public authUser: any;
    caso: number;
    repuesto: string;
    public todo: FormGroup;
    resultadoBusqueda = [];
    public repuestoCounter = true;

    ngOnInit() {
        this.caso = this.navParams.get('caso');
        this.repuesto = this.navParams.get('ingreso');
        this.auth.userData$.subscribe((res: any) => {
            this.authUser = res;
            this.postData = {
                token: this.authUser.token,
                repuesto: this.repuesto
            };
            if (this.postData) {
                this.repuestoService.repuestoData(this.postData).subscribe((res2: any) => {
                    this.repuestoData = res2.repuestosData;
                    this.repuestoData.forEach(item => {
                        let repuestoServer = item.repuesto.trim();
                        let repuestoInput = this.repuesto.trim();
                        if (item.codigo === this.repuesto || repuestoServer.toLowerCase() === repuestoInput.toLowerCase()) {
                            this.resultadoBusqueda = item;
                        }
                    });
                    if (this.resultadoBusqueda.length === 0) {
                        this.repuestoCounter = true;
                    } else {
                        this.repuestoCounter = false;
                    }
                });
            }
        });
    }

    processForm() {
        console.log(this.todo.value);

    }

}
