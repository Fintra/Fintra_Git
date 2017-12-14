import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCurrencycodeComponent } from './tab-currencycode.component';

describe('TabCurrencycodeComponent', () => {
  let component: TabCurrencycodeComponent;
  let fixture: ComponentFixture<TabCurrencycodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabCurrencycodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabCurrencycodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
