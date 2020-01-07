import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GutterCoolingComponent } from './gutter-cooling.component';

describe('GutterCoolingComponent', () => {
  let component: GutterCoolingComponent;
  let fixture: ComponentFixture<GutterCoolingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GutterCoolingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GutterCoolingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
