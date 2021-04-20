import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DiscoverMovie } from '../../../utilities/interfaces/discover-movie';
import { DiscoverService } from '../../services/discover.service';

@Component({
  selector: 'app-discover-container',
  templateUrl: './discover-container.component.html',
  styleUrls: ['./discover-container.component.scss']
})
export class DiscoverContainerComponent implements OnInit {
  public moviesList: Observable<DiscoverMovie>

  constructor(private discoverService: DiscoverService) { }

  ngOnInit(): void {
    this.moviesList = this.discoverService.getDiscoverMovies();
  }
}
