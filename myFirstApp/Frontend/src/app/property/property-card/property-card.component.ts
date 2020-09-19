import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss'],
})
export class PropertyCardComponent implements OnInit {
  Property: any = {
    Id: 1,
    Type: 'House',
    Price: 120000,
    Name: 'Golden Garden House',
  };
  constructor() {}

  ngOnInit() {}
}
