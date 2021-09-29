import { ActivatedRoute, Router } from '@angular/router';
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
  isInitilize: boolean = false;
  index: number;

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
      console.log('id number', idNumber);
    }
    this.housesService.houses.find((house) => {
      if (house.id === idNumber) {
        this.house = house;
        this.index = this.housesService.houses.indexOf(this.house);
        this.isInitilize = true;
      } //else this.router.navigate(['/notFounded']);
    });
    if (this.isInitilize === false) this.router.navigate(['/notFounded']);
  }

  onDelete(): void {
    this.housesService.houseDelete(this.index);
    this.router.navigate(['/home']);
  }
}
