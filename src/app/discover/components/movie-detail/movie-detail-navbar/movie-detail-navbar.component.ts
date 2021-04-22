import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail-navbar',
  templateUrl: './movie-detail-navbar.component.html',
  styleUrls: ['./movie-detail-navbar.component.scss']
})
export class MovieDetailNavbarComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  goToDiscover() {
    this.router.navigate([`/discover`]);
  }
}
