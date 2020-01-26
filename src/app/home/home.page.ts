import {Component, OnInit} from '@angular/core';
import {Router, RouterEvent} from '@angular/router';
import {AuthService} from './../services/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    private selectedItem: any;
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
            url: '/home/reportes',
            icon: 'cube'
        }
    ];

    selectedPath = '';

    constructor(private router: Router, private authService: AuthService) {
        this.router.events.subscribe((event: RouterEvent) => {
            this.selectedPath = event.url;
        });
    }



    ngOnInit() {
    }
    logoutAction() {
        this.authService.logout();
    }
}
