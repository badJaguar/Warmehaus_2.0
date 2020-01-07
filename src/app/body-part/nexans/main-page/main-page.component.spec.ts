import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NexansMainPageComponent } from './main-page.component';

describe('MainPageComponent', () => {
  let component: NexansMainPageComponent;
  let fixture: ComponentFixture<NexansMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NexansMainPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NexansMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
