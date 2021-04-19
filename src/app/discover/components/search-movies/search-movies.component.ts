import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Movie } from 'src/app/utilities/interfaces/movie';
@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss']
})
export class SearchMoviesComponent implements OnInit {
  @Input() moviesList: Movie[];
   searchControl: FormControl;
   options: string[] = ['One', 'Two', 'Three'];
   filteredOptions: Observable<Movie[]>;
  
  constructor() { 
    this.searchControl = new FormControl('')
    
  }

  ngOnInit(): void {
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filterValues(value))
    );
  }

  private filterValues(value: string): Movie[] {
    const filterValue = value.toLowerCase();
    return this.moviesList.filter(option => option.title.toLowerCase().indexOf(filterValue) === 0);
  }
}
