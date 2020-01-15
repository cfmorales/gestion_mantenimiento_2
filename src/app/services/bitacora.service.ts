import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpService} from './http.service';

@Injectable({
    providedIn: 'root'
})
export class BitacoraService {
    bitacoraData$ = new BehaviorSubject<any>([]);

    constructor(private httpService: HttpService) {
    }

    bitacoraData(postData: any): Observable<any> {
        return this.httpService.post('bitacora', postData);
    }
}
