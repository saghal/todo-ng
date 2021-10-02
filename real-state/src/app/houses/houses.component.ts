import { houseStructure } from 'src/app/common/interfaces';
import { Component, OnInit } from '@angular/core';
import { HousesService } from '../services/houses.service';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css'],
})
export class HousesComponent implements OnInit {
  houses: houseStructure[];
  columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
  ];

  constructor(private housesService: HousesService) {}

  ngOnInit(): void {
    this.houses = this.housesService.houses;
    console.log(this.houses);
  }
}
