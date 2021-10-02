import { FileUploadService } from './../../services/file-upload.service';
import { houseStructure, userStructure } from 'src/app/common/interfaces';
import { Component, OnInit } from '@angular/core';
import { HousesService } from 'src/app/services/houses.service';
import { Router } from '@angular/router';
import { AccountsService } from 'src/app/services/accounts.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-new-house',
  templateUrl: './new-house.component.html',
  styleUrls: ['./new-house.component.css'],
})
export class NewHouseComponent implements OnInit {
  house: houseStructure;
  accounts: userStructure[] | null = this.accountsService.accounts;
  imageError: string | null;
  isImageSaved: boolean;
  cardImageBase64: string | null;
  constructor(
    private housesServic: HousesService,
    private router: Router,
    private accountsService: AccountsService,
    private fileUploadService: FileUploadService
  ) {}

  ngOnInit(): void {}

  createHouse(form: houseStructure): void {
    this.housesServic.houseCreate(form, this.cardImageBase64);
    console.log('what happen for input', form);
    this.router.navigate(['/home']);
  }
  onChange(ID: any): void {
    // for checking validation
    console.log(ID);
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
