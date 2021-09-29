import { Injectable, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';
import { userStructure } from '../common/interfaces';
@Injectable()
export class AuthService {
  users: userStructure[];
  user: userStructure | undefined;
  constructor(private accountsService: AccountsService) {
    this.users = this.accountsService.accounts;
  }
  login(username: string, password: string): boolean {
    console.log('in authService, login function: ', username, password);
    let account: string | null = localStorage.getItem(username);
    if (account !== null) {
      let accountDetail = JSON.parse(account);
      if (accountDetail.password === password) return true;
      else return false;
    } else return false;
    /*this.user = this.users.find((user) => {
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
    }*/
  }
}
