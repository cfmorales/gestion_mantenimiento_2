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
    @Input() orden: any;
    public especialidadEditVal = [];
    public prioEditVal = [];
    public manEditVal = [];

    constructor() {
    }

    ngOnInit() {
        // console.log(this.orden);
        this.especialidadEdit();
    }

    public especialidadEdit(): void {
        this.especialidad.forEach(item => {
            if (item.val === this.orden.especialidad) {
                item.isChecked = true;
            }
            this.especialidadEditVal.push(item);
        });
        this.prioridad.forEach(item => {
            if (item.val === this.orden.prioridad) {
                item.isChecked = true;
            }
            this.prioEditVal.push(item);
        });
        this.mant.forEach(item => {
            if (item.val === this.orden.mantenimiento) {
                item.isChecked = true;
            }
            this.manEditVal.push(item);
        });
    }

}
