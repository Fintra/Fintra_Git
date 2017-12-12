import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabBankComponent } from './tab-bank.component';

describe('TabBankComponent', () => {
  let component: TabBankComponent;
  let fixture: ComponentFixture<TabBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
