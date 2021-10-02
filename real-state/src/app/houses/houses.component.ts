import { houseListStructure, houseStructure } from 'src/app/common/interfaces';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { HousesService } from '../services/houses.service';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css'],
})
export class HousesComponent implements OnInit, OnDestroy {
  houses: houseStructure[];
  rowData: houseListStructure[];
  columnDefs: ColDef[];

  constructor(private housesService: HousesService) {}

  ngOnInit(): void {
    this.houses = this.housesService.houses;
    console.log(this.houses);
    this.rowData = this.housesService.getHousesRowData();
    console.log('in houses component: ', this.rowData);
    this.columnDefs = this.housesService.getHousescolumnDefs();
  }

  ngOnDestroy(): void {}
}
