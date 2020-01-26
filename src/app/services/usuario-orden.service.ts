import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpService} from './http.service';

@Injectable({
    providedIn: 'root'
})
export class UsuarioOrdenService {
    usuarioOrdenData$ = new BehaviorSubject<any>([]);

    constructor(private httpService: HttpService) {
    }

    getCurrentUsuarioOrdenData() {
        return this.usuarioOrdenData$.getValue();
    }

    usuarioOrdenData(postData: any): Observable<any> {
        return this.httpService.post('usuariosorden_get', postData);
    }
}
