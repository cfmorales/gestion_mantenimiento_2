import {Injectable} from '@angular/core';
import {AlertController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class AlertService {
    constructor(public alertController: AlertController) {
    }

    async presentAlertConfirm(header: string, message: string) {
        let choice;
        const alert = await this.alertController.create({
            header: header,
            message: message,
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel'
                },
                {
                    text: 'Aceptar',
                    role: 'okay'
                }
            ]
        });

        await alert.present();
        await alert.onDidDismiss().then(data => {
            choice = data;
        });
        return choice;
    }

    async presentAlertPrompt(header: string, message: string) {
        const alert = await this.alertController.create({
            header: header,
            message: message,
            inputs: [
                {
                    name: 'rango',
                    type: 'number'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {

                    }
                }, {
                    text: 'Aceptar',
                    handler: () => {

                    }
                }
            ]
        });

        await alert.present();
    }
}
