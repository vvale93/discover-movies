import { Component, Input, OnInit } from '@angular/core';
import { Cast, Crew } from 'src/app/utilities/interfaces/credits';
import { Movie } from 'src/app/utilities/interfaces/movie';
import { TableConfiguration } from 'src/app/utilities/interfaces/table-configuration';

@Component({
  selector: 'app-cast-crew-accordion',
  templateUrl: './cast-crew-accordion.component.html',
  styleUrls: ['./cast-crew-accordion.component.scss']
})
export class CastCrewAccordionComponent implements OnInit {
  @Input() cast: Cast[];
  @Input() crew: Crew[];
  @Input() movieDetails: Movie;
  public imgSource: string ="https://image.tmdb.org/t/p/w500";
  public castTableConfiguration: TableConfiguration = {
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

  public crewTableConfiguration : TableConfiguration = {
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
