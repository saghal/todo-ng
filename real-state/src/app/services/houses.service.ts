import { Injectable } from '@angular/core';
import { houseListStructure, houseStructure } from './../common/interfaces';
import { DateService } from './date.service';
import { ColDef } from 'ag-grid-community';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Injectable()
export class HousesService {
  constructor(
    private dateService: DateService,
    private dbService: NgxIndexedDBService
  ) {
    console.log('in constructor');
  }
  columnDefs: ColDef[] = [
    { field: 'registrationNumber', sortable: true },
    { field: 'size', sortable: true },
    { field: 'yearBuilt', sortable: true },
    { field: 'updated', sortable: true },
  ];
  rowData: houseListStructure[] = [];
  houses: houseStructure[] = [
    {
      id: 1,
      registrationNumber: 123,
      style: 'Apartment',
      size: 200,
      yearBuilt: 2008,
      type: 'office',
      status: 'sale',
      address: 'tehran',
      updated: '2020-1-1',
      editor: 'saghal',
      image:
        'https://rdcnewscdn.realtor.com/wp-content/uploads/2017/10/breaking-bad-whites-home.jpg',
    },
    {
      id: 2,
      registrationNumber: 321,
      style: 'Apartment',
      size: 150,
      yearBuilt: 2009,
      type: 'residential',
      status: 'rent',
      address: 'tehran',
      updated: '2020-2-1',
      editor: 'saghal',
      image:
        'https://rdcnewscdn.realtor.com/wp-content/uploads/2017/10/breaking-bad-whites-home.jpg',
    },
  ];
  houseCreate(form: houseStructure, image: string | null): void {
    const currDate: string = this.dateService.getCurrentDate();
    const length: number = this.houses.length;
    const id: number = this.houses[length - 1].id + 1;
    this.dbService
      .add('houses', {
        registrationNumber: +form.registrationNumber,
        style: form.style,
        size: +form.size,
        yearBuilt: +form.yearBuilt,
        type: form.type,
        status: form.status,
        address: form.address,
        updated: currDate,
        editor: form.editor,
        image: image,
      })
      .subscribe((key: any) => {
        console.log('key: ', key);
      });
    this.houses.push({
      id: id,
      registrationNumber: +form.registrationNumber,
      style: form.style,
      size: +form.size,
      yearBuilt: +form.yearBuilt,
      type: form.type,
      status: form.status,
      address: form.address,
      updated: currDate,
      editor: form.editor,
      image: image,
    });
  }

  houseUpdate(
    house: houseStructure,
    index: number,
    image: string | null
  ): void {
    const currentDate = this.dateService.getCurrentDate();
    this.houses[index].style = house.style;
    this.houses[index].size = +house.size;
    this.houses[index].yearBuilt = +house.yearBuilt;
    this.houses[index].type = house.type;
    this.houses[index].status = house.status;
    this.houses[index].address = house.address;
    this.houses[index].updated = currentDate;
    this.houses[index].registrationNumber = +house.registrationNumber;
    if (image) this.houses[index].image = image;
    console.log('houses be mola', this.houses[index]);
  }

  houseDelete(index: number): void {
    if (index > -1) this.houses.splice(index, 1);
  }
  getHousesRowData(): houseListStructure[] {
    //this.rawStruc.registraionNumber = 123;
    this.rowData = []; // component not must be redeclare this array?
    this.houses.forEach((house) => {
      this.rowData.push({
        registraionNumber: house.registrationNumber,
        size: house.size,
        yearBuilt: house.yearBuilt,
        updated: house.updated,
      });
    });

    console.log('raw data in service : ', this.rowData);
    return this.rowData;
  }
  getHousescolumnDefs(): ColDef[] {
    return this.columnDefs;
  }
}
