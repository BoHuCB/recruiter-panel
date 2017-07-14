import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IDashboardColumnModel } from '../models/dashboard.model';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Candidate } from '../models/candidate.model';

@Injectable()
export class MessageService { 

    message = new BehaviorSubject<string>('');
    oMessage = this.message.asObservable();

    showMessage(data: Candidate) {
        this.message.next(data.name + ' has been updated');
    }

}