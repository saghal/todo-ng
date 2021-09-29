import { houseStructure } from './../../common/interfaces';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousesService } from 'src/app/services/houses.service';

@Component({
  selector: 'app-edit-house',
  templateUrl: './edit-house.component.html',
  styleUrls: ['./edit-house.component.css'],
})
export class EditHouseComponent implements OnInit {
  house: houseStructure | undefined;
  index: number;
  isInitialize: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private housesService: HousesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let temp = this.route.snapshot.paramMap.get('id');
    let idNumber: number;
    if (typeof temp != undefined && temp) {
      idNumber = +temp;
    }
    // an else for route to 404 page same in house component
    this.housesService.houses.find((house) => {
      if (house.id === idNumber) {
        this.house = house;
        this.index = this.housesService.houses.indexOf(this.house);
        this.isInitialize = true;
      }
    });
    if (this.isInitialize === false) this.router.navigate(['/notFounded']);
  }

  updateHouse(form: houseStructure): void {
    this.housesService.houseUpdate(form, this.index);
    this.router.navigate(['/houses', this.house?.id]);
  }
}
