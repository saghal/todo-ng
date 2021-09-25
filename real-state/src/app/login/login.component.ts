import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLogged: boolean;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  onSubmit(form: any): void {
    this.isLogged = this.authService.login(form.username, form.password);
    if (this.isLogged) {
      console.log('in loggin component');
      this.router.navigate(['/home']);
    } else console.log('not logged in login component');
  }
}
