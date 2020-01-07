import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GutterCoolingItemComponent } from './gutter-cooling-item.component';

describe('GutterCoolingItemComponent', () => {
  let component: GutterCoolingItemComponent;
  let fixture: ComponentFixture<GutterCoolingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GutterCoolingItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GutterCoolingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
