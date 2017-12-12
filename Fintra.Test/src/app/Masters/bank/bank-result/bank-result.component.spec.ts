import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankResultComponent } from './bank-result.component';

describe('BankResultComponent', () => {
  let component: BankResultComponent;
  let fixture: ComponentFixture<BankResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
