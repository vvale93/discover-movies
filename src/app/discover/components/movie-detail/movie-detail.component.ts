import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { DetailsResponse, InputDetailsInterface } from 'src/app/utilities/interfaces/details-response';
import { Genre, GenresResponse } from 'src/app/utilities/interfaces/genre';
import { Movie, MovieDetail } from 'src/app/utilities/interfaces/movie';
import { DiscoverService } from '../../services/discover.service';
import * as _ from 'lodash'
import { Cast, Crew } from 'src/app/utilities/interfaces/credits';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  public movieDetails: MovieDetail;
  public imgSource: string ="https://image.tmdb.org/t/p/w500";
  public genresList: Genre[];
  public cast: Cast[];
  public crew: Crew[];
  public detailsData: InputDetailsInterface = {
    cast: null,
    director: null,
    writer: null,
    stars: null
  };

  constructor(
    public router:Router,
    private activatedRoute: ActivatedRoute,
    private discoverService: DiscoverService
  ) { 
    this.activatedRoute.data.subscribe((data: DetailsResponse) => {
      this.movieDetails = data.contact;
    });
  }

  ngOnInit(): void {
    this.discoverService.getCredits(this.movieDetails.id).subscribe(res => {
      this.detailsData.cast = res.cast;
      this.detailsData.director = this.getDirector(res.crew);
      this.detailsData.writer = this.getWriter(res.crew);
      this.detailsData.stars = this.getStars(res.cast);
      this.cast = res.cast;
      this.crew = res.crew;
    })
  }

  private getDirector(crew): Crew {
    const director = _.find(crew, member => member.job === 'Director');
    return director;
  }

  private getWriter(crew): Crew {
    let writer = _.find(crew, member => member.job === 'Novel')
    if(!writer) {
      writer = _.find(crew, member => member.job === 'Director');
    }
    return writer;
  }

  private getStars(cast): string {
    const auxStars = _.take(cast, 3);
    let starsNames = [];
    auxStars.forEach(star => {
      starsNames.push(star.name);
    })
    return starsNames.join(', ');
  }

}
