import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCountrycodeComponent } from './filter-countrycode.component';

describe('FilterCountrycodeComponent', () => {
  let component: FilterCountrycodeComponent;
  let fixture: ComponentFixture<FilterCountrycodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterCountrycodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCountrycodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
