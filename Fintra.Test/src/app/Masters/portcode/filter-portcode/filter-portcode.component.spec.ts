import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPortcodeComponent } from './filter-portcode.component';

describe('FilterPortcodeComponent', () => {
  let component: FilterPortcodeComponent;
  let fixture: ComponentFixture<FilterPortcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterPortcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPortcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
