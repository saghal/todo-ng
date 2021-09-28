import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { houseStructure } from 'src/app/common/interfaces';
import { HousesService } from 'src/app/services/houses.service';
@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css'],
})
export class HouseComponent implements OnInit {
  house: houseStructure | undefined;
  constructor(
    private route: ActivatedRoute,
    private housesService: HousesService
  ) {}

  ngOnInit(): void {
    let temp = this.route.snapshot.paramMap.get('id');
    let idNumber: number;
    if (typeof temp != undefined && temp) {
      idNumber = +temp;
      console.log('id number', idNumber);
    }
    this.housesService.houses.find((house) => {
      if (house.id === idNumber) this.house = house;
    });
  }
}
