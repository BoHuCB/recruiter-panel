import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightCardComponent } from './insight-card.component';

describe('InsightCardComponent', () => {
  let component: InsightCardComponent;
  let fixture: ComponentFixture<InsightCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsightCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
