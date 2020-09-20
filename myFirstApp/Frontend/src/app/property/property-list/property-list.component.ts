import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss'],
})
export class PropertyListComponent implements OnInit {
  propertyList: Array<any> = [
    {
      Id: 1,
      Type: 'House',
      Price: 135000,
      Name: 'Golden Garden House',
    },
    {
      Id: 2,
      Type: 'Townhouse',
      Price: 124000,
      Name: 'Taverns Place',
    },
    {
      Id: 3,
      Type: 'House',
      Price: 220000,
      Name: 'Kingdom Gate',
    },
    {
      Id: 4,
      Type: 'Apartment',
      Price: 340000,
      Name: 'Grapes Town',
    },
    {
      Id: 5,
      Type: 'House',
      Price: 54300,
      Name: 'Blue Grass',
    },
    {
      Id: 6,
      Type: 'House',
      Price: 122300,
      Name: 'Old mill',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
