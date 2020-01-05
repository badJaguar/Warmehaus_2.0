import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqareCalculatorComponent } from './sqare-calculator.component';

describe('SqareCalculatorComponent', () => {
  let component: SqareCalculatorComponent;
  let fixture: ComponentFixture<SqareCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqareCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqareCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
