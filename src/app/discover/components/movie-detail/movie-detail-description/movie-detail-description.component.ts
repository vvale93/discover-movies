import { Component, Input, OnInit } from '@angular/core';
import { MovieDetail } from 'src/app/utilities/interfaces/movie';

@Component({
  selector: 'app-movie-detail-description',
  templateUrl: './movie-detail-description.component.html',
  styleUrls: ['./movie-detail-description.component.scss']
})
export class MovieDetailDescriptionComponent implements OnInit {
  @Input() movieDetails: MovieDetail;
  @Input() detailsData
  public imgSource: string ="https://image.tmdb.org/t/p/w500";

  
  constructor() { }

  ngOnInit(): void {
  }


}
