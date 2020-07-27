import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailscreenComponent } from './failscreen.component';

describe('FailscreenComponent', () => {
  let component: FailscreenComponent;
  let fixture: ComponentFixture<FailscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
