import { houseStructure } from 'src/app/common/interfaces';
import { Component, OnInit } from '@angular/core';
import { HousesService } from 'src/app/services/houses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-house',
  templateUrl: './new-house.component.html',
  styleUrls: ['./new-house.component.css'],
})
export class NewHouseComponent implements OnInit {
  house: houseStructure;
  constructor(private housesServic: HousesService, private router: Router) {}

  ngOnInit(): void {}

  createHouse(form: houseStructure): void {
    this.housesServic.houseCreate(form);
    this.router.navigate(['/home']);
  }
  onChange(ID: any): void {
    console.log(ID);
  }
}
