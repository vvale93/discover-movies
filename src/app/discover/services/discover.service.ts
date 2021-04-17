import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiscoverService {

  constructor(private http: HttpClient) { }

  getDiscoverMovies() {
    return this.http.get('https://api.themoviedb.org/3/discover/movie');
  }
}
