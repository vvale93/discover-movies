import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SearchMoviesComponent } from './search-movies.component';

describe('SearchMoviesComponent', () => {
  let component: SearchMoviesComponent;
  let fixture: ComponentFixture<SearchMoviesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
