import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpService} from './http.service';

@Injectable({
    providedIn: 'root'
})
export class RepuestoService {

    constructor(private httpService: HttpService) {
    }

    repuestoData(postData: any): Observable<any> {
        return this.httpService.post('repuestos_get', postData);
    }
}
