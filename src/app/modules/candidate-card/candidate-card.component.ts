import { Component, OnInit, Input } from '@angular/core';
import { Candidate } from '../../models/candidate.model';

@Component({
  selector: 'app-candidate-card',
  templateUrl: './candidate-card.component.html',
  styleUrls: ['./candidate-card.component.scss']
})
export class CandidateCardComponent implements OnInit {

  @Input()
  Index: number;

  @Input()
  Item: Candidate;

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

  @Input()
  isInTN: boolean;

  nameInitials: string;
  
  constructor() { }

  ngOnInit() {
    this.nameInitials = this.candidateName.split(' ')[0][0].toUpperCase() + this.candidateName.split(' ')[1][0].toUpperCase();
  }

}
