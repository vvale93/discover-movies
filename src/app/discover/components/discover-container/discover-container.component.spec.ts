import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverContainerComponent } from './discover-container.component';

describe('DiscoverComponent', () => {
  let component: DiscoverContainerComponent;
  let fixture: ComponentFixture<DiscoverContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
