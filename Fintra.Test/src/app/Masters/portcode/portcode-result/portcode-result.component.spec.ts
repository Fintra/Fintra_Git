import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortcodeResultComponent } from './portcode-result.component';

describe('PortcodeResultComponent', () => {
  let component: PortcodeResultComponent;
  let fixture: ComponentFixture<PortcodeResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortcodeResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortcodeResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
