import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cab11WComponent } from './cab11-w.component';

describe('Cab11WComponent', () => {
  let component: Cab11WComponent;
  let fixture: ComponentFixture<Cab11WComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cab11WComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cab11WComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
