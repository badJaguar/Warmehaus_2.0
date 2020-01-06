import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Txlp1Component } from './txlp1.component';

describe('Txlp1Component', () => {
  let component: Txlp1Component;
  let fixture: ComponentFixture<Txlp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Txlp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Txlp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
