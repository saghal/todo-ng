import { UsernameValidators } from './username.validators';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      UsernameValidators.cannotContainSpace,
    ]),
    password: new FormControl('', Validators.required),
  });
  constructor() {}

  ngOnInit(): void {}

  get username(): any {
    return this.form.get('username');
  }
  get password(): any {
    return this.form.get('password');
  }
}
