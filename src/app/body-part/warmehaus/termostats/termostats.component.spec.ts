import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermostatsComponent } from './termostats.component';

describe('TermostatsComponent', () => {
  let component: TermostatsComponent;
  let fixture: ComponentFixture<TermostatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermostatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermostatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
