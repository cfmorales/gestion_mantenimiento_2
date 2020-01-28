import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FichaService {

    constructor(private httpService: HttpService) {
    }

    fichaData(postData: any): Observable<any> {
        return this.httpService.post('ficha_get', postData);
    }
}
