import { Component, OnInit } from '@angular/core';
import { HousesService } from '../services/houses.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css'],
})
export class HousesComponent implements OnInit {
  houses: any;
  constructor(private housesService: HousesService) {}

  ngOnInit(): void {
    this.houses = this.housesService.houses;
    console.log(this.houses);
  }
}
