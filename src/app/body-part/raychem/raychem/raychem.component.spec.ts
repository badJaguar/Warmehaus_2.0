import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaychemComponent } from './raychem.component';

describe('RaychemComponent', () => {
  let component: RaychemComponent;
  let fixture: ComponentFixture<RaychemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaychemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaychemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
