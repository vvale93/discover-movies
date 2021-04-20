import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardsContainerComponent } from './movie-cards-container.component';

describe('MovieCardsContainerComponent', () => {
  let component: MovieCardsContainerComponent;
  let fixture: ComponentFixture<MovieCardsContainerComponent>;

  beforeEach(async(() => {
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
