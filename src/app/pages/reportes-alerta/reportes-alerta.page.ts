import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModalController} from '@ionic/angular';
import {AuthService} from '../../services/auth.service';
import {PlanificadorService} from '../../services/planificador.service';
import {ModalAlertaPage} from './modal-alerta/modal-alerta.page';
import {NavigationExtras, Router} from '@angular/router';


@Component({
    selector: 'app-reportes-alerta',
    templateUrl: './reportes-alerta.page.html',
    styleUrls: ['./reportes-alerta.page.scss'],
})
export class ReportesAlertaPage implements OnInit {
    private todo: FormGroup;
    public authUser: any;
    public planificadorData: any;
    public postData;
    public visblePLanificadorData = [];
    public verifMan = [
        {val: 'Limpieza', isChecked: false},
        {val: 'Partes Eléctricas', isChecked: false},
        {val: 'Partes Mecánicas', isChecked: false},
        {val: 'Partes Neumaticas', isChecked: false},
        {val: 'Tuberias', isChecked: false},
        {val: 'Estructura', isChecked: false},
        {val: 'Tiempo de prueba', isChecked: false},
        {val: 'Horómetro', isChecked: false},
        {val: 'Herramientas', isChecked: false}
    ];
    public especialidad = [
        {tipo: 'Mecánica', isChecked: false, val: '1'},
        {tipo: 'Eléctrica', isChecked: false, val: '2'},
        {tipo: 'Control', isChecked: false, val: '3'}
    ];
    public prioridad = [
        {tipo: 'Emergente', isChecked: false, val: '1'},
        {tipo: 'Urgente', isChecked: false, val: '2'},
        {tipo: 'Programable', isChecked: false, val: '3'}
    ];
    public mant = [
        {tipo: 'Correctivo', isChecked: false, val: '1'},
        {tipo: 'Preventivo', isChecked: false, val: '2'},
        {tipo: 'Horas', isChecked: false, val: '3'}
    ];

    constructor(private formBuilder: FormBuilder,
                private modalController: ModalController,
                private auth: AuthService,
                private planificadorService: PlanificadorService,
                private router: Router) {
        this.todo = this.formBuilder.group({
            desde: ['', Validators.required],
            hasta: ['', Validators.required]
        });
    }

    ngOnInit() {
        const desde = new Date(new Date().setDate(new Date().getDate() - 2));
        const hasta = new Date(new Date().setDate(new Date().getDate() + 2));
        desde.setHours(0, 0, 0, 0);
        hasta.setHours(0, 0, 0, 0);
        this.auth.userData$.subscribe((res: any) => {
            this.authUser = res;
            this.postData = {token: this.authUser.token};
            if (this.postData) {
                this.planificadorService.planificadorData(this.postData).subscribe((res2: any) => {
                    this.planificadorData = res2.planificadorData;
                    this.planificadorData.forEach(item => {
                        if (item.fecha !== '' && item.estado === 'Pendiente') {
                            const fechaPlan = new Date(item.fecha);
                            if (fechaPlan.getTime() >= desde.getTime() &&
                                fechaPlan.getTime() <= hasta.getTime()) {
                                this.visblePLanificadorData.push(item);
                                console.log(this.visblePLanificadorData);
                            }
                        }
                    });
                });
            }

        });
    }

    async processForm() {

        const modal = await this.modalController.create({
            component: ModalAlertaPage, componentProps: {
                desde: this.todo.value.desde,
                hasta: this.todo.value.hasta,
                verifMan: this.verifMan,
                especialidad: this.especialidad,
                prioridad: this.prioridad,
                mant: this.mant,
            }
        });
        await modal.present();
    }

    public cambioPagina(item) {
        let navigationExtras: NavigationExtras = {
            state: {
                verifMan: this.verifMan,
                especialidad: this.especialidad,
                prioridad: this.prioridad,
                mant: this.mant,
                authUser: this.authUser,
                orden: item
            }
        };
        this.router.navigate(['home/orden-trabajo-general'], navigationExtras);
    }
}
