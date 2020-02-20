import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgControlValueAccessorComponent } from './ng-control-value-accessor.component';

describe('NgControlValueAccessorComponent', () => {
  let component: NgControlValueAccessorComponent;
  let fixture: ComponentFixture<NgControlValueAccessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgControlValueAccessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgControlValueAccessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
