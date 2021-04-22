import { Component, Input, OnInit } from '@angular/core';
import { InputDetailsInterface } from 'src/app/utilities/interfaces/details-response';
import { MovieDetail } from 'src/app/utilities/interfaces/movie';

@Component({
  selector: 'app-movie-detail-description',
  templateUrl: './movie-detail-description.component.html',
  styleUrls: ['./movie-detail-description.component.scss']
})
export class MovieDetailDescriptionComponent implements OnInit {
  @Input() movieDetails: MovieDetail;
  @Input() detailsData: InputDetailsInterface;
  public imgSource: string ="https://image.tmdb.org/t/p/w500";
  
  constructor() { }

  ngOnInit(): void {
  }


}
