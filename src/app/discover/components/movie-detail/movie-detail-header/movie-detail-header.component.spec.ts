import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailHeaderComponent } from './movie-detail-header.component';

describe('MovieDetailHeaderComponent', () => {
  let component: MovieDetailHeaderComponent;
  let fixture: ComponentFixture<MovieDetailHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
