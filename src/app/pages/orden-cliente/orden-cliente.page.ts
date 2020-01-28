import {Component, OnInit} from '@angular/core';
import {AuthService} from './../../services/auth.service';
import {ToastService} from '../../services/toast.service';
import {NavigationExtras, Router} from '@angular/router';
import {UsuarioOrdenService} from '../../services/usuario-orden.service';
import {AlertService} from '../../services/alert.service';
import {PlanificadorService} from '../../services/planificador.service';

@Component({
    selector: 'app-orden-cliente',
    templateUrl: './orden-cliente.page.html',
    styleUrls: ['./orden-cliente.page.scss'],
})
export class OrdenClientePage implements OnInit {
    public authUser: any;
    public ordenUsuarioData: any;
    public planificadorData: any;

    public postData;

    public verifMan = [
        {val: 'Limpieza', isChecked: false, caso: '1'},
        {val: 'Partes Eléctricas', isChecked: false, caso: '2'},
        {val: 'Partes Mecánicas', isChecked: false, caso: '3'},
        {val: 'Partes Neumaticas', isChecked: false, caso: '4'},
        {val: 'Tuberias', isChecked: false, caso: '5'},
        {val: 'Estructura', isChecked: false, caso: '6'},
        {val: 'Tiempo de prueba', isChecked: false, caso: '7'},
        {val: 'Horómetro', isChecked: false, caso: '8'},
        {val: 'Herramientas', isChecked: false, caso: '9'}
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


    constructor(
        private auth: AuthService, private toastService: ToastService,
        private router: Router, private usuarioOrdenService: UsuarioOrdenService, private planificadorService: PlanificadorService,
        private alertSerivce: AlertService
    ) {

    }

    ngOnInit() {
        this.auth.userData$.subscribe((res: any) => {
            this.authUser = res;
            this.postData = {token: this.authUser.token};
        });
        // this.postData = {token: this.authUser.token + 'a'};
        //
        // if (this.postData.token) {
        //     this.usuarioOrdenService.usuarioOrdenData(this.postData).subscribe((res: any) => {
        //         this.ordenUsuarioData = res.usuarioOrdenesData;
        //
        //     });
        // }
        this.postData = {token: this.authUser.token + 'a'};

        if (this.postData) {
            this.planificadorService.planificadorData(this.postData).subscribe((res: any) => {
                this.planificadorData = res.planificadorData;
                console.log(this.planificadorData);
            });
        }
    }

    evaluarFecha(fecha: any) {
        let actual = new Date();
        let param = new Date(fecha);
        if (actual.getFullYear() === param.getFullYear()) {
            if (actual.getMonth() === param.getMonth()) {
                if (actual.getDay === param.getDay) {
                    return 1;
                } else {
                    return 0;
                }
            } else {
                return 0;
            }
        } else {
            return 0;
        }
    }

    openComponent(item, caso: number) {

        if (caso === 0) {
            this.alertSerivce
                .presentAlertConfirm('Confirmación', '¿Quiere completar este mantenimiento fuera del tiempo?')
                .then((res: any) => {
                    if (res.role === 'okay') {
                        this.cambioPagina(item);
                    }
                });
        } else {
            this.cambioPagina(item);
        }
    }

    private cambioPagina(item) {
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
