import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MillimatComponent } from './millimat.component';

describe('MillimatComponent', () => {
  let component: MillimatComponent;
  let fixture: ComponentFixture<MillimatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MillimatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MillimatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
