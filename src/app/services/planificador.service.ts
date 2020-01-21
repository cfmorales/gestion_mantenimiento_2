import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpService} from './http.service';

@Injectable({
    providedIn: 'root'
})
export class PlanificadorService {
    planificadorData$ = new BehaviorSubject<any>([]);

    constructor(private httpService: HttpService) {
    }
  getCurrentPlanificadorData() {
    return this.planificadorData$.getValue();
  }

  planificadorData(postData: any): Observable<any> {
    return this.httpService.post('planificador_get', postData);
  }
}
