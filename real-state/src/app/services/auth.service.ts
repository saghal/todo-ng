import { Injectable, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Injectable()
export class AuthService {
  users: {
    id: number;
    username: string;
    password: string;
    email: string;
    access: string;
  }[]; // must be declare a interface
  user:
    | {
        id: number;
        username: string;
        password: string;
        email: string;
        access: string;
      }
    | undefined;
  constructor(private accountsService: AccountsService) {
    this.users = this.accountsService.accounts;
  }
  login(username: string, password: string): boolean {
    console.log('in authService, login function: ', username, password);
    this.user = this.users.find((user) => {
      return user.username === username;
    });
    if (this.user === undefined) {
      console.log('user not defiend');
      return false;
    } else {
      console.log('this account: ', this.user);

      if (this.user.password === password) {
        console.log('logged in');
        return true;
      } else {
        console.log('wrong password');
        return false;
      }
    }
  }
}
