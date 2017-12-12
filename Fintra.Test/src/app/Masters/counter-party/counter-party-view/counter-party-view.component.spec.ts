import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterPartyViewComponent } from './counter-party-view.component';

describe('CounterPartyViewComponent', () => {
  let component: CounterPartyViewComponent;
  let fixture: ComponentFixture<CounterPartyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterPartyViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterPartyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
