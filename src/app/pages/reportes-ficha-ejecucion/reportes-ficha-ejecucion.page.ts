import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {ToastService} from '../../services/toast.service';
import {Router} from '@angular/router';
import {FichaService} from '../../services/ficha.service';
import {PlanificadorService} from '../../services/planificador.service';


@Component({
    selector: 'app-reportes-ficha-ejecucion',
    templateUrl: './reportes-ficha-ejecucion.page.html',
    styleUrls: ['./reportes-ficha-ejecucion.page.scss'],
})
export class ReportesFichaEjecucionPage implements OnInit {
    public authUser: any;
    public fichaData: any;
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
    public body: any;
    public planificadorData: any;
    public orden: any;
    public especialidadEditVal = [];
    public prioEditVal = [];
    public manEditVal = [];
    public veridManEdit = [];

    constructor(private auth: AuthService,
                private toastService: ToastService,
                private router: Router,
                private fichaService: FichaService,
                private planificadorService: PlanificadorService) {
    }

    ngOnInit() {

        this.auth.userData$.subscribe((res: any) => {
            this.authUser = res;
            this.postData = {token: this.authUser.token, codigo: '1'};
            if (this.postData) {
                this.fichaService.fichaData(this.postData).subscribe((res2: any) => {
                    this.fichaData = res2.fichaData;
                    this.body = this.fichaData[0];

                    // console.log(Object.keys(this.body).length);
                });
                this.planificadorService.planificadorData(this.postData).subscribe((res2: any) => {
                    this.planificadorData = res2.planificadorData;
                    this.orden = this.planificadorData[0];
                    this.especialidadEdit();
                    // console.log(this.orden);
                });
            }

        });

    }

    public especialidadEdit(): void {
        this.especialidad.forEach(item => {
            if (item.val === this.orden.especialidad) {
                item.isChecked = true;
            }
            this.especialidadEditVal.push(item);
        });

        this.verifMan.forEach(item => {
            this.body.verificacion_mtto.array.forEach(item2 => {
                if (item.caso === item2.caso) {
                    item.isChecked = true;
                }
            });
            this.veridManEdit.push(item);

        });
        this.prioridad.forEach(item => {
            if (item.val === this.orden.prioridad) {
                item.isChecked = true;
            }
            this.prioEditVal.push(item);
        });
        this.mant.forEach(item => {
            if (item.val === this.orden.mantenimiento) {
                item.isChecked = true;
            }
            this.manEditVal.push(item);
        });
    }

}
