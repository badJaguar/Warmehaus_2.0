import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermostatsItemComponent } from './termostats-item.component';

describe('TermostatsItemComponent', () => {
  let component: TermostatsItemComponent;
  let fixture: ComponentFixture<TermostatsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermostatsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermostatsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
