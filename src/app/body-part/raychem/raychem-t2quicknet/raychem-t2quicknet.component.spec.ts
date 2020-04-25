import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaychemT2quicknetComponent } from './raychem-t2quicknet.component';

describe('RaychemT2quicknetComponent', () => {
  let component: RaychemT2quicknetComponent;
  let fixture: ComponentFixture<RaychemT2quicknetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaychemT2quicknetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaychemT2quicknetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
