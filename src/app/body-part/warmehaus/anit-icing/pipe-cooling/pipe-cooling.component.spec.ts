import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeCoolingComponent } from './pipe-cooling.component';

describe('PipeCoolingComponent', () => {
  let component: PipeCoolingComponent;
  let fixture: ComponentFixture<PipeCoolingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeCoolingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeCoolingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
