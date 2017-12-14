import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCountrycodeComponent } from './tab-countrycode.component';

describe('TabCountrycodeComponent', () => {
  let component: TabCountrycodeComponent;
  let fixture: ComponentFixture<TabCountrycodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabCountrycodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabCountrycodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
