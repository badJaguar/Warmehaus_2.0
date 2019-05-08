import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnitIcingComponent } from './anit-icing.component';

describe('AnitIcingComponent', () => {
  let component: AnitIcingComponent;
  let fixture: ComponentFixture<AnitIcingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnitIcingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnitIcingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
