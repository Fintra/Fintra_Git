import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCounterPartyComponent } from './tab-counter-party.component';

describe('TabCounterPartyComponent', () => {
  let component: TabCounterPartyComponent;
  let fixture: ComponentFixture<TabCounterPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabCounterPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabCounterPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
