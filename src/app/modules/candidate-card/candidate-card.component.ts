import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-candidate-card',
  templateUrl: './candidate-card.component.html',
  styleUrls: ['./candidate-card.component.scss']
})
export class CandidateCardComponent implements OnInit {

  @Input()
  candidateName: string;

  @Input()
  candidateCurrentTitle: string;

  @Input()
  candidateLocaion: string;
  
  @Input()
  candidateCurrentJob: string;

  @Input()
  candidateCurrentEmployer: string;

  @Input()
  candidatePriorJob: string;

  @Input()
  candidatePriorEmployer: string;
  
  constructor() { }

  ngOnInit() {
  }

}
