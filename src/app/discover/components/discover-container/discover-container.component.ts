import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DiscoverMovie } from '../../../utilities/interfaces/discover-movie';
import { GenresResponse, Genre } from '../../../utilities/interfaces/genre';
import { DiscoverService } from '../../services/discover.service';

@Component({
  selector: 'app-discover-container',
  templateUrl: './discover-container.component.html',
  styleUrls: ['./discover-container.component.scss']
})
export class DiscoverContainerComponent implements OnInit {
  public moviesList: Observable<DiscoverMovie>
  public genresList: Observable<GenresResponse>;

  constructor(private discoverService: DiscoverService) { }

  ngOnInit(): void {
    this.moviesList = this.discoverService.getDiscoverMovies();
    this.genresList = this.discoverService.getDiscoverGenres()
  }
}
