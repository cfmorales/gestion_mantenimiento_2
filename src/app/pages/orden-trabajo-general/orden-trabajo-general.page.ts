import {Component, OnInit} from '@angular/core';
import {HojaTrabajoComponent} from '../../components/hoja-trabajo/hoja-trabajo.component';
import {AuthService} from '../../services/auth.service';
import {ToastService} from '../../services/toast.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-orden-trabajo-general',
    templateUrl: './orden-trabajo-general.page.html',
    styleUrls: ['./orden-trabajo-general.page.scss'],
})
export class OrdenTrabajoGeneralPage implements OnInit {
    public authUser: any;
    verifMan: any;
    especialidad: any;
    prioridad: any;
    mant: any;

    constructor(private auth: AuthService, private toastService: ToastService,
                private router: Router) {
    }

    ngOnInit() {
        this.authUser = this.router.getCurrentNavigation().extras.state.authUser;
        this.verifMan = this.router.getCurrentNavigation().extras.state.verifMan;
        this.especialidad = this.router.getCurrentNavigation().extras.state.especialidad;
        this.prioridad = this.router.getCurrentNavigation().extras.state.prioridad;
        this.mant = this.router.getCurrentNavigation().extras.state.mant;

    }

}
