import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterpartyResultComponent } from './counterparty-result.component';

describe('CounterpartyResultComponent', () => {
  let component: CounterpartyResultComponent;
  let fixture: ComponentFixture<CounterpartyResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterpartyResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterpartyResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
