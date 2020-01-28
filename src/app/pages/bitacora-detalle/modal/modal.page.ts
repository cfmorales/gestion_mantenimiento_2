import {Component, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.page.html',
    styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
    item;


    constructor(private modalController: ModalController, public navParams: NavParams) {
    }

    ngOnInit() {
        this.item = this.navParams.get('item');
    }

    dismiss() {
        // using the injected ModalController this page this.modalController.dismiss({
        //             dismissed: true
        //         });
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            dismissed: true
        });
    }
}
