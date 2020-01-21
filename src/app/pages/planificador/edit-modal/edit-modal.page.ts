import {Component, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {AuthService} from '../../../services/auth.service';

@Component({
    selector: 'app-edit-modal',
    templateUrl: './edit-modal.page.html',
    styleUrls: ['./edit-modal.page.scss'],
})
export class EditModalPage implements OnInit {
    titulo;
    data;
    caso;
    public authUser: any;

    postData = {
        user_id: '',
        token: ''
    };
    public especialidad = [
        {val: 'Mecánica', isChecked: true},
        {val: 'Eléctrica', isChecked: false},
        {val: 'Control', isChecked: false}
    ];
    public prioridad = [
        {val: 'Emergente', isChecked: true},
        {val: 'Urgente', isChecked: false},
        {val: 'Programable', isChecked: false}
    ];
    public mant = [
        {val: 'Correctivo', isChecked: true},
        {val: 'Preventivo', isChecked: false},
        {val: 'Horas', isChecked: false}
    ];

    constructor(private modalController: ModalController, public navParams: NavParams, private auth: AuthService) {
    }

    ngOnInit() {
        this.titulo = this.navParams.get('titulo');
        this.data = this.navParams.get('data');
        this.caso = this.navParams.get('number');
        console.log(this.data, this.caso);
        this.auth.userData$.subscribe((res: any) => {
            this.authUser = res;
        });
    }

    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            dismissed: true
        });
    }
}
