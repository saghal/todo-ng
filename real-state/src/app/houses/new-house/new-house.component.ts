import { houseStructure, userStructure } from 'src/app/common/interfaces';
import { Component, OnInit } from '@angular/core';
import { HousesService } from 'src/app/services/houses.service';
import { Router } from '@angular/router';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-new-house',
  templateUrl: './new-house.component.html',
  styleUrls: ['./new-house.component.css'],
})
export class NewHouseComponent implements OnInit {
  house: houseStructure;
  accounts: userStructure[] | null = this.accountsService.accounts;
  constructor(
    private housesServic: HousesService,
    private router: Router,
    private accountsService: AccountsService
  ) {}

  ngOnInit(): void {}

  createHouse(form: houseStructure): void {
    this.housesServic.houseCreate(form);
    this.router.navigate(['/home']);
  }
  onChange(ID: any): void {
    // for checking validation
    console.log(ID);
  }
}
