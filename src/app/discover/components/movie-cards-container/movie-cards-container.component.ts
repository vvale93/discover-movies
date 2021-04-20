import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GenresResponse } from 'src/app/utilities/interfaces/genre';
import { Movie } from 'src/app/utilities/interfaces/movie';
import { DiscoverService } from '../../services/discover.service';

@Component({
  selector: 'app-movie-cards-container',
  templateUrl: './movie-cards-container.component.html',
  styleUrls: ['./movie-cards-container.component.scss']
})
export class MovieCardsContainerComponent implements OnInit {
  @Input() moviesList: Movie[];
  public genresList: Observable<GenresResponse>;
  
  constructor(private discoverService: DiscoverService) { }

  ngOnInit(): void {
    this.genresList = this.discoverService.getDiscoverGenres()
  }

}
