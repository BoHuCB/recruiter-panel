import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-insight-card',
  templateUrl: './insight-card.component.html',
  styleUrls: ['./insight-card.component.scss']
})
export class InsightCardComponent implements OnInit {

  @Input()
  text: string;

  @Input()
  count: string;

  constructor() { }

  ngOnInit() {
  }

}
