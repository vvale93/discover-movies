import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars-filter',
  templateUrl: './stars-filter.component.html',
  styleUrls: ['./stars-filter.component.scss']
})
export class StarsFilterComponent implements OnInit {
  public starsArray = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
