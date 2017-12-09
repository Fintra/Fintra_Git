import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltercustComponent } from './filtercust.component';

describe('FiltercustComponent', () => {
  let component: FiltercustComponent;
  let fixture: ComponentFixture<FiltercustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltercustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltercustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
