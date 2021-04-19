import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  constructor(public router:Router) { 
    const data = this.router.getCurrentNavigation().extras.state
    console.log(data)
  }

  ngOnInit(): void {
  }

}
