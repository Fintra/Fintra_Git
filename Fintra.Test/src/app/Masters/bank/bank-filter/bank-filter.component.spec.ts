import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankFilterComponent } from './bank-filter.component';

describe('BankFilterComponent', () => {
  let component: BankFilterComponent;
  let fixture: ComponentFixture<BankFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
