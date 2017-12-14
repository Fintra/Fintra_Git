import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrycodeViewComponent } from './countrycode-view.component';

describe('CountrycodeViewComponent', () => {
  let component: CountrycodeViewComponent;
  let fixture: ComponentFixture<CountrycodeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrycodeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrycodeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
