import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { debounceTime, filter, map, pluck, startWith, switchMap } from 'rxjs/operators';
import { Movie } from 'src/app/utilities/interfaces/movie';
import { SearchResponse } from 'src/app/utilities/interfaces/search-response';
import { DiscoverService } from '../../services/discover.service';
@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss']
})
export class SearchMoviesComponent implements OnInit {
  @Input() moviesList: Movie[];
   searchControl: FormControl;
   filteredOptions: Observable<Movie[]>;
   searchResult = [];
  
  constructor(
    private discoverService: DiscoverService,
    private router: Router 
    ) { 
    this.searchControl = new FormControl('')
  }

  ngOnInit(): void {
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      debounceTime(500),
      switchMap((searchText: string) => {
        return searchText  && searchText.trim().length > 0 ? this.discoverService.searchMovies(searchText) : of({results: this.moviesList});
      }),
      pluck('results'),
    )
  }

  public openMovieDetail(option): void {
    console.log(option)
    this.router.navigate([`/discover/${option.id}`], { state: option })
  }
}
