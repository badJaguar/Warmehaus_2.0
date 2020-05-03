import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArnoldRakMainPageComponent } from './main-page.component';


describe('MainPageComponent', () => {
  let component: ArnoldRakMainPageComponent;
  let fixture: ComponentFixture<ArnoldRakMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArnoldRakMainPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArnoldRakMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
