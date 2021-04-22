import { Component, Input, OnInit } from '@angular/core';
import { MovieDetail } from 'src/app/utilities/interfaces/movie';

@Component({
  selector: 'app-movie-detail-header',
  templateUrl: './movie-detail-header.component.html',
  styleUrls: ['./movie-detail-header.component.scss']
})
export class MovieDetailHeaderComponent implements OnInit {
  @Input() movieDetails: MovieDetail;

  constructor() { }

  ngOnInit(): void {
  }

}
