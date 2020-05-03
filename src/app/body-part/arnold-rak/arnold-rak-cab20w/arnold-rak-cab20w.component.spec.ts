import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArnoldRakCab20wComponent } from './arnold-rak-cab20w.component';

describe('ArnoldRakCab20wComponent', () => {
  let component: ArnoldRakCab20wComponent;
  let fixture: ComponentFixture<ArnoldRakCab20wComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArnoldRakCab20wComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArnoldRakCab20wComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
