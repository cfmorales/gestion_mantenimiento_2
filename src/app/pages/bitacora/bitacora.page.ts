import {Component, OnInit} from '@angular/core';
import {MaquinaService} from 'src/app/services/maquina.service';
import {AuthService} from './../../services/auth.service';
import {ToastService} from './../../services/toast.service';

@Component({
    selector: 'app-bitacora',
    templateUrl: './bitacora.page.html',
    styleUrls: ['./bitacora.page.scss'],
})
export class BitacoraPage implements OnInit {
    public authUser: any;
    public maquinaData: any;


    public postData;

    constructor(
        private auth: AuthService,
        private toastService: ToastService,
        private maquinaService: MaquinaService
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

    OnChange(event) {
        console.log(event.target.value);
    }


}
