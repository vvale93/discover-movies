import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../../utilities/interfaces/movie';
import { Genre } from '../../../utilities/interfaces/genre';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})

export class MovieCardComponent implements OnInit {
  @Input() public movie: Movie;
  @Input() private genres: Genre[];

  public subtitle: string = '';
  public imgSource: string ="https://image.tmdb.org/t/p/w500";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getGenresNames();
  }

  private getGenresNames(): void { 
    let matchedGenres = [];
    this.movie.genre_ids.forEach(movieGenre => {
      let matchGenre = _.find(this.genres, genre => movieGenre === genre.id);
      if(matchGenre) {
        matchedGenres.push(matchGenre.name);
      }
    })
    this.subtitle = matchedGenres.join(', ')
  }

  public openMovieDetail(): void {
    this.router.navigate([`/discover/${this.movie.id}`], { state: this.movie })
  }

}
