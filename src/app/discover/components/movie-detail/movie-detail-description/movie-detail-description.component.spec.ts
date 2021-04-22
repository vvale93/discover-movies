import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailDescriptionComponent } from './movie-detail-description.component';

describe('MovieDetailDescriptionComponent', () => {
  let component: MovieDetailDescriptionComponent;
  let fixture: ComponentFixture<MovieDetailDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
