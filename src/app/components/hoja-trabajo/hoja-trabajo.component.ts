import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-hoja-trabajo',
    templateUrl: './hoja-trabajo.component.html',
    styleUrls: ['./hoja-trabajo.component.scss'],
})
export class HojaTrabajoComponent implements OnInit {

    @Input() especialidad: any;
    @Input() prioridad: any;
    @Input() mant: any;
    @Input() authUser: any;
    @Input() verifMan: any;

    constructor() {
    }

    ngOnInit() {
    }

}
