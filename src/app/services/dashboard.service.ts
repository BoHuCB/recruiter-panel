import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IDashboardColumnModel } from '../models/dashboard.model';

@Injectable()
export class DashboardService {

  constructor(private httpClass: Http) { }

  getDahsboardList(): Observable<any> {
    return this.getHttpRequest('./assets/json/dashboard.json').map((response) => this.getHttpResponse(response));
  }

  protected getHttpRequest(remoteURL: string): Observable<Response> {
    return this.httpClass.get(remoteURL).map(data => data.json());
  }

  private getHttpResponse(dahsboardItems): Array<IDashboardColumnModel> {
    return dahsboardItems;
  }

}
