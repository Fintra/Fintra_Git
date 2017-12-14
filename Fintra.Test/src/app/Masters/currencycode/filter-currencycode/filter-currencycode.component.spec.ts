import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCurrencycodeComponent } from './filter-currencycode.component';

describe('FilterCurrencycodeComponent', () => {
  let component: FilterCurrencycodeComponent;
  let fixture: ComponentFixture<FilterCurrencycodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterCurrencycodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCurrencycodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
