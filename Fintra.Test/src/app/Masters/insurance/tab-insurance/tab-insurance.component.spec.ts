import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabInsuranceComponent } from './tab-insurance.component';

describe('TabInsuranceComponent', () => {
  let component: TabInsuranceComponent;
  let fixture: ComponentFixture<TabInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
