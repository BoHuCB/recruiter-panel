import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dahsboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  itemsList: Array<any> = new Array<any>();

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {

    this.dashboardService.getDahsboardList().subscribe(elements => this.itemsList = elements);
  }

}
