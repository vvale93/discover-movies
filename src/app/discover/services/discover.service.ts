import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DiscoverMovie } from '../../utilities/interfaces/discover-movie';
import { GenresResponse } from '../../utilities/interfaces/genre';
import { SearchResponse } from '../../utilities/interfaces/search-response';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscoverService {
  
  private baseUrl: string = 'https://api.themoviedb.org/3/'
  constructor(private http: HttpClient) { }

  public getDiscoverMovies(): Observable<DiscoverMovie>{
    return this.http.get<DiscoverMovie>(`${this.baseUrl}discover/movie`);
  }

  public getDiscoverGenres(): Observable<GenresResponse> {
    return this.http.get<GenresResponse>(`${this.baseUrl}genre/movie/list`);
  }

  public searchMovies(searchText: string): Observable<SearchResponse> { // tipar
    return this.http.get<SearchResponse>(`${this.baseUrl}search/movie?query=${searchText}`);
  }

}
