import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentResultComponent } from './content-result.component';

describe('ContentResultComponent', () => {
  let component: ContentResultComponent;
  let fixture: ComponentFixture<ContentResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
