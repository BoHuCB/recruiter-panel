import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { IDashboardColumnModel } from '../../models/dashboard.model';
import { Candidate } from '../../models/candidate.model';

@Component({
  selector: 'app-dahsboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  itemsList: Array<IDashboardColumnModel> = new Array<IDashboardColumnModel>();

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {

    this.dashboardService.getDahsboardList().subscribe(elements => this.itemsList = elements);
  }

  onDropElement(control: any, destStatus: number) {

    let destination = this.itemsList.filter(element => { return element.status === destStatus })[0].candidates;

    destination.push(control.dragData);

    this.removeItem(control.dragData);

    (<Candidate>control.dragData).status = destStatus;
  }

  removeItem(item: Candidate) {

    let origin = this.itemsList.filter(element => { return element.status === item.status })[0].candidates;

    let index = origin.map(function (e) {
      return e.did
    }).indexOf(item.did);

    origin.splice(index, 1);

  }

}
