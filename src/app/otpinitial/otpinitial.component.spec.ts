import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpinitialComponent } from './otpinitial.component';

describe('OtpinitialComponent', () => {
  let component: OtpinitialComponent;
  let fixture: ComponentFixture<OtpinitialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtpinitialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpinitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
