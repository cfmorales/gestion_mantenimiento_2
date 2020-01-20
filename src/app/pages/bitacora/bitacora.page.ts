import {Component, OnInit} from '@angular/core';
import {MaquinaService} from 'src/app/services/maquina.service';
import {AuthService} from './../../services/auth.service';
import {ToastService} from './../../services/toast.service';
import {NavigationExtras, Router} from '@angular/router';

@Component({
    selector: 'app-bitacora',
    templateUrl: './bitacora.page.html',
    styleUrls: ['./bitacora.page.scss'],
})
export class BitacoraPage implements OnInit {
    public authUser: any;
    public maquinaData: any;
    slcMaquina = '';
    bitacoraDesde = '';
    bitacoraHasta = '';
    public postData;

    constructor(
        private auth: AuthService,
        private toastService: ToastService,
        private maquinaService: MaquinaService,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.auth.userData$.subscribe((res: any) => {
            this.authUser = res;
        });
        this.postData = {token: this.authUser.token + 'a'};
        if (this.postData) {
            this.maquinaService.maquinaData(this.postData).subscribe((res: any) => {
                this.maquinaData = res.maquinaData;
                console.log(this.maquinaData);
            });
        }
    }

    buscarMaquina() {
        if (this.slcMaquina && this.bitacoraDesde) {
            console.log(this.slcMaquina);
            let navigationExtras: NavigationExtras = {
                    state: {
                        maquina_id: this.slcMaquina,
                        desde: this.bitacoraDesde,
                        hasta: this.bitacoraHasta,
                        token: this.authUser.token
                    }
                }
            ;
            this.router.navigate(['home/bitacoraDetalle'], navigationExtras);

        } else {
            this.toastService.presentToast(
                'Se debe llenar el campo máquina y los rangos de fecha.'
            );
        }
    }


}
