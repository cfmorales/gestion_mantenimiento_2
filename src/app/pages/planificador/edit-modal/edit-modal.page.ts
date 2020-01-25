import {Component, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {AuthService} from '../../../services/auth.service';

@Component({
    selector: 'app-edit-modal',
    templateUrl: './edit-modal.page.html',
    styleUrls: ['./edit-modal.page.scss'],
})
export class EditModalPage implements OnInit {

    constructor(private modalController: ModalController, public navParams: NavParams, private auth: AuthService) {
    }

    titulo;
    data;
    caso;
    public authUser: any;

    postData = {
        user_id: '',
        token: ''
    };
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

    public especialidadEditVal = [];
    public prioEditVal = [];
    public manEditVal = [];

    ngOnInit() {
        this.titulo = this.navParams.get('titulo');
        this.data = this.navParams.get('data');
        this.caso = this.navParams.get('number');
        console.log(this.especialidad);
        this.auth.userData$.subscribe((res: any) => {
            this.authUser = res;
        });
        this.especialidadEdit(this.especialidad, this.prioridad, this.mant);
    }

    dismiss() {

        this.modalController.dismiss({
            dismissed: true
        });
    }

    public especialidadEdit(especialidad, prio, man): void {
        especialidad.forEach(item => {
            if (item.val === this.data.especialidad) {
                item.isChecked = true;
            }
            this.especialidadEditVal.push(item);
        });
        prio.forEach(item => {
            if (item.val === this.data.prioridad) {
                item.isChecked = true;
            }
            this.prioEditVal.push(item);
        });
        man.forEach(item => {
            if (item.val === this.data.mantenimiento) {
                item.isChecked = true;
            }
            this.manEditVal.push(item);
        });
    }

    date(fecha) {
        return new Date(fecha);
    }

}
