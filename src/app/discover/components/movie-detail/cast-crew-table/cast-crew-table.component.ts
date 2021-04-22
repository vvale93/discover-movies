import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/utilities/interfaces/movie';

@Component({
  selector: 'app-cast-crew-table',
  templateUrl: './cast-crew-table.component.html',
  styleUrls: ['./cast-crew-table.component.scss'],
})
export class CastCrewTableComponent implements OnInit {
  @Input() dataSource;

  @Input() displayedColumns;
  @Input() movieDetails: Movie;
  @Input() tableConfiguration;
  public imgSource: string = 'https://image.tmdb.org/t/p/w500';
  constructor() {}

  ngOnInit(): void {}
}
