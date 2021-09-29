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
    let JSONDatas = [
      { id: 1, username: 'saghal', password: 'saghal', admin: true },
      { id: 2, username: 'jes', password: 'jes', admin: false },
      { id: 3, username: 'walter', password: 'walter', admin: false },
    ];

    localStorage.setItem('datas', JSON.stringify(JSONDatas));
    localStorage.setItem(
      'saghal',
      JSON.stringify({ id: 1, password: 'saghal', admin: true })
    );
    localStorage.setItem(
      'jes',
      JSON.stringify({ id: 2, password: 'jes', admin: false })
    );
    localStorage.setItem(
      'walter',
      JSON.stringify({ id: 3, password: 'walter', admin: false })
    );

    let datas = localStorage.getItem('datas');
    let account: string | null = localStorage.getItem('saghal');
    if (account !== null) {
      let saghalAccount = JSON.parse(account);
      console.log('password:', saghalAccount.password);
      console.log(saghalAccount);
    }
    console.log(datas, datas?.length);
  }
  onSubmit(form: { username: string; password: string }): void {
    this.isLogged = this.authService.login(form.username, form.password);
    if (this.isLogged) {
      console.log('in loggin component');
      this.router.navigate(['/home']);
    } else console.log('not logged in login component');
  }
}
