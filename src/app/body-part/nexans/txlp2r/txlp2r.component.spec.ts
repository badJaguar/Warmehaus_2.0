import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Txlp2rComponent } from './txlp2r.component';

describe('Txlp2rComponent', () => {
  let component: Txlp2rComponent;
  let fixture: ComponentFixture<Txlp2rComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Txlp2rComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Txlp2rComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
