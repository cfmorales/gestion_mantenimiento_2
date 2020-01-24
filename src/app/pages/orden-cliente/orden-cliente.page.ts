import {Component, OnInit} from '@angular/core';
import {AuthService} from './../../services/auth.service';
import {ToastService} from '../../services/toast.service';
import {Router} from '@angular/router';
import {UsuarioOrdenService} from '../../services/usuario-orden.service';


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
        private router: Router, private usuarioOrdenService: UsuarioOrdenService
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
                console.log(this.ordenUsuarioData);
                // this.ordenUsuarioData[0].push({clave: 2});
                console.log(Array.of(this.ordenUsuarioData[0]).push(2));
                // const dateRes = this.ordenUsuarioData[0].fecha;
                // const date = new Date();
                // console.log(date, new Date(dateRes), dateRes);
            });
        }
    }

}
