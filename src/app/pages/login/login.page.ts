import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthConstants} from '../../config/auth-constants';
import {AuthService} from './../../services/auth.service';
import {StorageService} from './../../services/storage.service';
import {ToastService} from './../../services/toast.service';
@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
    postData = {
        username: '',
        password: ''
    };
    constructor(
        private router: Router,
        private authService: AuthService,
        private storageService: StorageService,
        private toastService: ToastService
    ) {
    }
    ngOnInit() {
    }
    validateInputs() {
        console.log(this.postData);
        let username = this.postData.username.trim();
        let password = this.postData.password.trim();
        return (
            this.postData.username &&
            this.postData.password &&
            username.length > 0 &&
            password.length > 0
        );
    }
    loginAction() {
        console.log(this.postData);
        if (this.validateInputs()) {
            this.authService.login(this.postData).subscribe(
                (res: any) => {
                    if (res.userData) {
                        // Storing the User data.
                        this.storageService
                            .store(AuthConstants.AUTH, res.userData)
                            .then(res2 => {
                                this.router.navigate(['home']);
                                window.location.reload();
                            });
                    } else {
                        this.toastService.presentToast('Usuario o contraseña incorrecto.');
                    }
                },
                (error: any) => {
                    this.toastService.presentToast('Problemas con el servidor.');
                }
            );
        } else {
            this.toastService.presentToast(
                'Por favor ingrese datos validos.'
            );
        }
    }
}
