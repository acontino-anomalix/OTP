import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiscreensComponent } from './uiscreens.component';

describe('UiscreensComponent', () => {
  let component: UiscreensComponent;
  let fixture: ComponentFixture<UiscreensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiscreensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiscreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
