import { Injectable } from '@angular/core';
import { houseStructure } from './../common/interfaces';
import { DateService } from './date.service';
@Injectable()
export class HousesService {
  constructor(private dateService: DateService) {}
  houses: houseStructure[] = [
    {
      id: 123,
      style: 'Apartment',
      size: 200,
      yearBuilt: 2008,
      type: 'office',
      status: 'sale',
      address: 'tehran',
      updated: '2020-1-1',
    },
    {
      id: 321,
      style: 'Apartment',
      size: 150,
      yearBuilt: 2009,
      type: 'residential',
      status: 'rent',
      address: 'tehran',
      updated: '2020-2-1',
    },
  ];
  houseCreate(form: houseStructure): void {
    this.houses.push({
      id: form.id,
      style: form.style,
      size: form.size,
      yearBuilt: form.yearBuilt,
      type: form.type,
      status: form.status,
      address: form.address,
      updated: '1200-0-0',
    });
  }

  houseUpdate(house: houseStructure, index: number): void {
    const currentDate = this.dateService.getCurrentDate();
    this.houses[index].style = house.style;
    this.houses[index].size = house.size;
    this.houses[index].yearBuilt = house.yearBuilt;
    this.houses[index].type = house.type;
    this.houses[index].status = house.status;
    this.houses[index].address = house.address;
    this.houses[index].updated = currentDate;
    this.houses[index].id = house.id;
    console.log('houses be mola', this.houses[index]);
  }
}
