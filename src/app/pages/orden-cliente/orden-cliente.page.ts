import {Component, OnInit} from '@angular/core';
import {AuthService} from './../../services/auth.service';
import {ToastService} from '../../services/toast.service';
import {NavigationExtras, Router} from '@angular/router';
import {UsuarioOrdenService} from '../../services/usuario-orden.service';
import {ModalController} from '@ionic/angular';
import {HojaTrabajoComponent} from '../../components/hoja-trabajo/hoja-trabajo.component';

@Component({
    selector: 'app-orden-cliente',
    templateUrl: './orden-cliente.page.html',
    styleUrls: ['./orden-cliente.page.scss'],
})
export class OrdenClientePage implements OnInit {
    public authUser: any;
    public ordenUsuarioData: any;

    public postData;
    public form = [
        {val: 'Pepperoni', isChecked: true},
        {val: 'Sausage', isChecked: false},
        {val: 'Mushroom', isChecked: false}
    ];

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


    constructor(
        private auth: AuthService, private toastService: ToastService,
        private router: Router, private usuarioOrdenService: UsuarioOrdenService, private modal: ModalController
    ) {

    }

    ngOnInit() {
        this.auth.userData$.subscribe((res: any) => {
            this.authUser = res;
            this.postData = {token: this.authUser.token};
        });
        this.postData = {token: this.authUser.token + 'a'};

        if (this.postData.token) {
            this.usuarioOrdenService.usuarioOrdenData(this.postData).subscribe((res: any) => {
                this.ordenUsuarioData = res.usuarioOrdenesData;

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

    openComponent() {
        let navigationExtras: NavigationExtras = {
            state: {
                verifMan: this.verifMan,
                especialidad: this.especialidad,
                prioridad: this.prioridad,
                mant: this.mant,
                authuser: this.authUser
            }
        };
        this.router.navigate(['home/orden-trabajo-general'], navigationExtras);
    }

}
