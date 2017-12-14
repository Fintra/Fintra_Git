import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencycodeViewComponent } from './currencycode-view.component';

describe('CurrencycodeViewComponent', () => {
  let component: CurrencycodeViewComponent;
  let fixture: ComponentFixture<CurrencycodeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencycodeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencycodeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
