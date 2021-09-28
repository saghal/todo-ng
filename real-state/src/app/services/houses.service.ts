import { houseStructure } from '../common/interfaces';

export class HousesService {
  houses: houseStructure[] = [
    {
      id: 123,
      style: 'Apartment',
      size: 200,
      yearBuilt: 2008,
      type: 'sale',
      address: 'tehran',
      updated: '2020-1-1',
    },
    {
      id: 321,
      style: 'Apartment',
      size: 150,
      yearBuilt: 2009,
      type: 'sale',
      address: 'tehran',
      updated: '2020-2-1',
    },
  ];
}
