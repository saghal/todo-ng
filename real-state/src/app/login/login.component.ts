import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLogged: boolean;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  onSubmit(form: any): void {
    this.isLogged = this.authService.login(form.username, form.password);
    if (this.isLogged) console.log('in loggin component');
    else console.log('not logged in login component');
  }
}
