import { houseStructure, userStructure } from './../../common/interfaces';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousesService } from 'src/app/services/houses.service';
import { AccountsService } from 'src/app/services/accounts.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-edit-house',
  templateUrl: './edit-house.component.html',
  styleUrls: ['./edit-house.component.css'],
})
export class EditHouseComponent implements OnInit {
  house: houseStructure | undefined;
  accounts: userStructure[] | null = this.accountsService.accounts;
  index: number;
  isInitialize: boolean = false;
  imageError: string | null;
  isImageSaved: boolean;
  cardImageBase64: string | null;
  constructor(
    private route: ActivatedRoute,
    private housesService: HousesService,
    private router: Router,
    private accountsService: AccountsService
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
    this.housesService.houseUpdate(form, this.index, this.cardImageBase64);
    this.router.navigate(['/houses', this.house?.id]);
  }
  fileChangeEvent(fileInput: any): any {
    this.imageError = null;
    if (fileInput.target.files && fileInput.target.files[0]) {
      // Size Filter Bytes
      const max_size = 20971520;
      const allowed_types = ['image/png', 'image/jpeg'];
      const max_height = 15200;
      const max_width = 25600;

      if (fileInput.target.files[0].size > max_size) {
        this.imageError = 'Maximum size allowed is ' + max_size / 1000 + 'Mb';

        return false;
      }

      if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
        this.imageError = 'Only Images are allowed ( JPG | PNG )';
        return false;
      }
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = (rs) => {
          const img_height = 5222; //rs.currentTarget['height'];
          const img_width = 5555; //rs.currentTarget['width'];

          console.log(img_height, img_width);

          if (img_height > max_height && img_width > max_width) {
            this.imageError =
              'Maximum dimentions allowed ' +
              max_height +
              '*' +
              max_width +
              'px';
            return false;
          } else {
            const imgBase64Path = e.target.result;
            this.cardImageBase64 = imgBase64Path;
            //this.fileUploadService.
            this.isImageSaved = true;
            // this.previewImagePath = imgBase64Path;
          }
        };
      };

      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }
}
