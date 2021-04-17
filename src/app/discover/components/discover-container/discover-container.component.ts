import { Component, OnInit } from '@angular/core';

import { DiscoverService } from '../../services/discover.service';

@Component({
  selector: 'app-discover-container',
  templateUrl: './discover-container.component.html',
  styleUrls: ['./discover-container.component.scss']
})
export class DiscoverContainerComponent implements OnInit {

  constructor(private discoverService: DiscoverService) { }

  ngOnInit(): void {
    this.discoverService.getDiscoverMovies().subscribe(res => console.log(res))
  }

}
