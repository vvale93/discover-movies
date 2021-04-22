import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/utilities/interfaces/movie';

@Component({
  selector: 'app-cast-crew-accordion',
  templateUrl: './cast-crew-accordion.component.html',
  styleUrls: ['./cast-crew-accordion.component.scss']
})
export class CastCrewAccordionComponent implements OnInit {
  @Input() cast;
  @Input() crew;
  @Input() movieDetails: Movie;
  public imgSource: string ="https://image.tmdb.org/t/p/w500";
  castTableConfiguration = {
    displayedColumns: ['Photo', 'Name', 'Character'],
    columnsDetail: [
      {
        columnHeader: 'Photo',
        sourceProperty: 'profile_path',
        valueType: 'image'
      },
      {
        columnHeader: 'Name',
        sourceProperty: 'name',
        valueType: 'text'
      },
      {
        columnHeader: 'Character',
        sourceProperty: 'character',
        valueType: 'text'
      },
    ]
  };

  crewTableConfiguration = {
    displayedColumns: ['Name', 'Department', 'Job'],
    columnsDetail: [
      {
        columnHeader: 'Name',
        sourceProperty: 'name',
        valueType: 'text'
      },
      {
        columnHeader: 'Department',
        sourceProperty: 'department',
        valueType: 'text'
      },
      {
        columnHeader: 'Job',
        sourceProperty: 'job',
        valueType: 'text'
      },
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
