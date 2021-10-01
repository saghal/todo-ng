import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLogged: boolean;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    /*  let accounts : string | null = 
    let datas: string | null = localStorage.getItem('datas');
    let account: string | null = localStorage.getItem('saghal');
    if (account !== null && datas !== null) {
      let allAccounts = JSON.parse(datas);
      let saghalAccount = JSON.parse(account);
      console.log('password:', saghalAccount.password);
      console.log(saghalAccount);
      console.log(allAccounts);
    }*/
  }
  onSubmit(form: { username: string; password: string }): void {
    this.isLogged = this.authService.login(form.username, form.password);
    if (this.isLogged) {
      console.log('in loggin component');
      this.router.navigate(['/home']);
    } else console.log('not logged in login component');
  }
}
