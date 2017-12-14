import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPortcodeComponent } from './tab-portcode.component';

describe('TabPortcodeComponent', () => {
  let component: TabPortcodeComponent;
  let fixture: ComponentFixture<TabPortcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabPortcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabPortcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
