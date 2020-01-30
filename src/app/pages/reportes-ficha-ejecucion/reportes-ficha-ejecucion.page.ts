import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {ToastService} from '../../services/toast.service';
import {Router} from '@angular/router';
import {FichaService} from '../../services/ficha.service';
import {PlanificadorService} from '../../services/planificador.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

import {File} from '@ionic-native/file/ngx';
import {FileOpener} from '@ionic-native/file-opener/ngx';
import {Platform} from '@ionic/angular';

@Component({
    selector: 'app-reportes-ficha-ejecucion',
    templateUrl: './reportes-ficha-ejecucion.page.html',
    styleUrls: ['./reportes-ficha-ejecucion.page.scss'],
})
export class ReportesFichaEjecucionPage implements OnInit {

    constructor(private auth: AuthService,
                private toastService: ToastService,
                private router: Router,
                private fichaService: FichaService,
                private planificadorService: PlanificadorService,
                private plt: Platform,
                private file: File, private fileOpener: FileOpener) {
    }

    public authUser: any;
    public fichaData: any;
    public postData;
    public verifMan = [
        {val: 'Limpieza', isChecked: false, caso: '1'},
        {val: 'Partes Eléctricas', isChecked: false, caso: '2'},
        {val: 'Partes Mecánicas', isChecked: false, caso: '3'},
        {val: 'Partes Neumaticas', isChecked: false, caso: '4'},
        {val: 'Tuberias', isChecked: false, caso: '5'},
        {val: 'Estructura', isChecked: false, caso: '6'},
        {val: 'Tiempo de prueba', isChecked: false, caso: '7'},
        {val: 'Horómetro', isChecked: false, caso: '8'},
        {val: 'Herramientas', isChecked: false, caso: '9'}
    ];
    public especialidad = [
        {tipo: 'Mecánica', isChecked: false, val: '1'},
        {tipo: 'Eléctrica', isChecked: false, val: '2'},
        {tipo: 'Control', isChecked: false, val: '3'}
    ];
    public prioridad = [
        {tipo: 'Emergente', isChecked: false, val: '1'},
        {tipo: 'Urgente', isChecked: false, val: '2'},
        {tipo: 'Programable', isChecked: false, val: '3'}
    ];
    public mant = [
        {tipo: 'Correctivo', isChecked: false, val: '1'},
        {tipo: 'Preventivo', isChecked: false, val: '2'},
        {tipo: 'Horas', isChecked: false, val: '3'}
    ];
    public body: any;
    public planificadorData: any;
    public orden: any;
    public especialidadEditVal = [];
    public prioEditVal = [];
    public manEditVal = [];
    public veridManEdit = [];

    pdfObj = null;

    ngOnInit() {

        this.auth.userData$.subscribe((res: any) => {
            this.authUser = res;
            this.postData = {token: this.authUser.token, codigo: '1'};
            if (this.postData) {
                this.fichaService.fichaData(this.postData).subscribe((res2: any) => {
                    this.fichaData = res2.fichaData;
                    this.body = this.fichaData[0];

                    // console.log(Object.keys(this.body).length);
                });
                this.planificadorService.planificadorData(this.postData).subscribe((res2: any) => {
                    this.planificadorData = res2.planificadorData;
                    this.orden = this.planificadorData[0];
                    this.especialidadEdit();
                    // console.log(this.orden);
                });
            }

        });

    }

    private comprobarParadaPro(caso) {
        if (caso === '1') {
            return 'Si';
        } else {
            return 'No';
        }
    }

    public especialidadEdit(): void {
        this.especialidad.forEach(item => {
            if (item.val === this.orden.especialidad) {
                item.isChecked = true;
            }
            this.especialidadEditVal.push(item);
        });

        this.verifMan.forEach(item => {
            this.body.verificacion_mtto.array.forEach(item2 => {
                if (item.caso === item2.caso) {
                    item.isChecked = true;
                }
            });
            this.veridManEdit.push(item);

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

    descargarPDF(ord) {
        console.log(ord);
        const docDefinition = {
            content: [
                {text: 'Datos del trabajo.', style: 'header'},
                {
                    alignment: 'justify',
                    columns: [
                        {
                            text: ['Orden: ' + ord.orden_id + '\n',
                                'Area: ' + ord.area + '\n',
                                'Máquina ' + ord.maquina_id.descripcion + '\n',
                                'Proceso:' + ord.proceso + ' \n',
                                'Solicitado por: ' + ord.solicitado + '\n'],
                        },
                        {
                            text: ['Parada de proceso: ' + this.comprobarParadaPro(ord.parada_pro) + '\n',
                                'Fecha: ' + ord.fecha + '\n'
                            ],
                        }
                    ]
                },
                {text: 'Sintomas de Fallas/Trabajo Realizado.', style: 'header'},
                {
                    alignment: 'justify',
                    columns: [
                        {
                            text: [ord.sintomas + '\n'],
                        }
                    ],
                },
                {
                    alignment: 'justify',
                    columns: [
                        {
                            text: ['Recibido por: ' + ord.recibido_sintomas + '\n'],
                        },
                        {
                            text: ['Fecha: ' + ord.fecha_sintomas + '\n',],
                        }
                    ]
                },
                {text: 'REMINDER', style: 'header'},
                {text: new Date().toTimeString(), alignment: 'right'},

                {text: 'From', style: 'subheader'},
                {text: 'this.letterObj.from'},

                {text: 'To', style: 'subheader'},
                'this.letterObj.to',

                {text: 'this.letterObj.text', style: 'story', margin: [0, 20, 0, 20]},

                {
                    ul: [
                        'Bacon',
                        'Rips',
                        'BBQ',
                    ]
                }
            ],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    alignment: 'center',
                },
                subheader: {
                    fontSize: 14,
                    bold: true,
                    margin: [0, 15, 0, 0]
                },
                story: {
                    italic: true,
                    alignment: 'center',
                    width: '50%',
                }
            }
        };
        this.pdfObj = pdfMake.createPdf(docDefinition);
        if (this.plt.is('cordova')) {
            this.pdfObj.getBuffer((buffer) => {
                const blob = new Blob([buffer], {type: 'application/pdf'});
                // Save the PDF to the data Directory of our App
                this.file.writeFile(this.file.dataDirectory, 'reporteFicha.pdf', blob, {replace: true}).then(fileEntry => {
                    // Open the PDf with the correct OS tools
                    this.fileOpener.open(this.file.dataDirectory + 'reporteFicha.pdf', 'application/pdf');
                });
            });
        } else {
            // On a browser simply use download!
            this.pdfObj.download();
        }
    }
}
