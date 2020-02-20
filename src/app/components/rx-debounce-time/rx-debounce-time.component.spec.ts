import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxDebounceTimeComponent } from './rx-debounce-time.component';

describe('RxDebounceTimeComponent', () => {
  let component: RxDebounceTimeComponent;
  let fixture: ComponentFixture<RxDebounceTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxDebounceTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxDebounceTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
