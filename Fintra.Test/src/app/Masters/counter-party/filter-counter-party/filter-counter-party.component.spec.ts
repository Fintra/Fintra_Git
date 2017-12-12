import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCounterPartyComponent } from './filter-counter-party.component';

describe('FilterCounterPartyComponent', () => {
  let component: FilterCounterPartyComponent;
  let fixture: ComponentFixture<FilterCounterPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterCounterPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCounterPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
