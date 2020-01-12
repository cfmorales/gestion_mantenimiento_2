import {Component, OnInit} from '@angular/core';
import {AuthService} from './../../services/auth.service';


@Component({
    selector: 'app-orden-cliente',
    templateUrl: './orden-cliente.page.html',
    styleUrls: ['./orden-cliente.page.scss'],
})
export class OrdenClientePage implements OnInit {
    public authUser: any;

    postData = {
        user_id: '',
        token: ''
    };
    public form = [
        {val: 'Pepperoni', isChecked: true},
        {val: 'Sausage', isChecked: false},
        {val: 'Mushroom', isChecked: false}
    ];

    constructor(
        private auth: AuthService
    ) {

    }

    ngOnInit() {
        this.auth.userData$.subscribe((res: any) => {
            this.authUser = res;
        });
    }

}
