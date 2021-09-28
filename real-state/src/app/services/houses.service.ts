import { houseStructure } from '../common/interfaces';

export class HousesService {
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
}
