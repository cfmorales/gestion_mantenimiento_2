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
    @Input() body: any;
    @Input() tamanio: any;
    public especialidadEditVal = [];
    public prioEditVal = [];
    public manEditVal = [];
    public veridManEdit = [];

    constructor() {
    }

    ngOnInit() {
        console.log(this.authUser, this.body);
        this.especialidadEdit();
    }

    public especialidadEdit(): void {
        this.especialidad.forEach(item => {
            if (item.val === this.orden.especialidad) {
                item.isChecked = true;
            }
            this.especialidadEditVal.push(item);
        });
        if (this.tamanio !== 0) {
            this.verifMan.forEach(item => {
                this.body.verificacion_mtto.array.forEach(item2 => {
                    if (item.caso === item2.caso) {
                        item.isChecked = true;
                    }
                });
                this.veridManEdit.push(item);

            });
        }
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
