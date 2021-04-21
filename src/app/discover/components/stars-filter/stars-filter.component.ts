import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/utilities/interfaces/movie';
import * as _ from 'lodash';
import { Subject } from 'rxjs';
import { DiscoverService } from '../../services/discover.service';

@Component({
  selector: 'app-stars-filter',
  templateUrl: './stars-filter.component.html',
  styleUrls: ['./stars-filter.component.scss']
})
export class StarsFilterComponent implements OnInit {
 //This approach should be updated to ngrx
  private originalMovieList: Movie[];
  public starsArray = [
    { value: 5, shouldPaint: false },
    { value: 4, shouldPaint: false },
    { value: 3, shouldPaint: false },
    { value: 2, shouldPaint: false },
    { value: 1, shouldPaint: false },
  ]

  private currentStar: number;

  constructor(private discoverService: DiscoverService) { }

  ngOnInit(): void {
    this.discoverService.originalMovieList.subscribe(movieList => {
      this.originalMovieList = movieList});
  }

  public filterByRanking(starSelected) {
    if(starSelected.value !== this.currentStar) {
      this.currentStar = starSelected.value;
      this.starsArray.forEach(star => {
        if (star.value <= starSelected.value) {
          star.shouldPaint = true;
        } else {
          star.shouldPaint = false;
        }
      })
      const auxMovies = _.filter(this.originalMovieList, movie => {
        const auxMaxRating = this.currentStar * 2;
        const auxMinRating = auxMaxRating - 2;
        return movie.vote_average <= auxMaxRating && movie.vote_average > auxMinRating
      })
      this.discoverService.setFilteredMovieList(auxMovies)
    } else {
      this.currentStar = null;
      this.starsArray.forEach(star => {
          star.shouldPaint = false;
      })
      this.discoverService.setFilteredMovieList(this.originalMovieList)
    }
  }

}
