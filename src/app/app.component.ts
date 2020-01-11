import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    public appPages = [
        {
            title: 'Home',
            url: '/home',
            icon: 'home'
        },
        {
            title: 'Orden de trabajo administrador',
            url: '/home/orden-administrador',
            icon: 'square-outline'
        },
        {
            title: 'Planificador',
            url: '/home/planificador',
            icon: 'key'
        },
        {
            title: 'Orden de trabajo Cliente',
            url: '/home/orden-cliente',
            icon: 'square-outline'
        },
        {
            title: 'Bitácora de máquina',
            url: '/home/bitacora',
            icon: 'folder-open'
        },
        {
            title: 'Módulo de repuestos',
            url: '/home/repuestos',
            icon: 'construct'
        },
        {
            title: 'Módulo de reportes',
            url: '/home/list',
            icon: 'cube'
        }
    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
