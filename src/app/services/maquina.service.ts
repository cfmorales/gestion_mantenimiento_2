import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpService} from './http.service';

@Injectable({
    providedIn: 'root'
})
export class MaquinaService {
    maquinaData$ = new BehaviorSubject<any>([]);

    constructor(private httpService: HttpService) {
    }

    getCurrentMaquinaData() {
        return this.maquinaData$.getValue();
    }

  maquinaData(postData: any): Observable<any> {
      return this.httpService.post('maquina_data', postData);
  }
}
