import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MovieCardsContainerComponent } from './movie-cards-container.component';

describe('MovieCardsContainerComponent', () => {
  let component: MovieCardsContainerComponent;
  let fixture: ComponentFixture<MovieCardsContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieCardsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
