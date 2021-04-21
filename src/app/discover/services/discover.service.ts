import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DiscoverMovie } from '../../utilities/interfaces/discover-movie';
import { GenresResponse } from '../../utilities/interfaces/genre';
import { SearchResponse } from '../../utilities/interfaces/search-response';

import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Movie } from 'src/app/utilities/interfaces/movie';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DiscoverService {
  
  private baseUrl: string = 'https://api.themoviedb.org/3/';
  public originalMovieList: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);
  public movieListSubj: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);

  constructor(private http: HttpClient) { }

  public getDiscoverMovies(): Observable<DiscoverMovie>{
    return this.http.get<DiscoverMovie>(`${this.baseUrl}discover/movie`).pipe(
      tap(res => { 
        this.originalMovieList.next(res.results);
        this.movieListSubj.next(res.results);
      })
    );
  }

  public getDiscoverGenres(): Observable<GenresResponse> {
    return this.http.get<GenresResponse>(`${this.baseUrl}genre/movie/list`);
  }

  public searchMovies(searchText: string): Observable<SearchResponse> { // tipar
    return this.http.get<SearchResponse>(`${this.baseUrl}search/movie?query=${searchText}`);
  }

  public setFilteredMovieList(moviesFiltered: Movie[]) {
    this.movieListSubj.next(moviesFiltered);
  }

}
