import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortcodeViewComponent } from './portcode-view.component';

describe('PortcodeViewComponent', () => {
  let component: PortcodeViewComponent;
  let fixture: ComponentFixture<PortcodeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortcodeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortcodeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
