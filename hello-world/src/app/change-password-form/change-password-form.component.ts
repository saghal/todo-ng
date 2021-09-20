import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css'],
})
export class ChangePasswordFormComponent implements OnInit {
  form = new FormGroup({
    oldPassword: new FormControl('', Validators.required),
    newPassword: new FormControl('', Validators.required),
    confirmNewPassword: new FormControl('', Validators.required),
  });
  constructor() {}
  get oldPassword(): any {
    return this.form.get('oldPassword');
  }
  get newPassword(): any {
    return this.form.get('newPassword');
  }
  get confirmNewPassword(): any {
    return this.form.get('confirmNewPassword');
  }

  ngOnInit(): void {}
}
