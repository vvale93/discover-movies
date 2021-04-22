import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StarsFilterComponent } from './stars-filter.component';

describe('StarsFilterComponent', () => {
  let component: StarsFilterComponent;
  let fixture: ComponentFixture<StarsFilterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StarsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
