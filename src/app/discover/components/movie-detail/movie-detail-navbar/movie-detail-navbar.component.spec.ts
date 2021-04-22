import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailNavbarComponent } from './movie-detail-navbar.component';

describe('MovieDetailNavbarComponent', () => {
  let component: MovieDetailNavbarComponent;
  let fixture: ComponentFixture<MovieDetailNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
