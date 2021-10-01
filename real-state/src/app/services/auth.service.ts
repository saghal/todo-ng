import { userStructure } from './../common/interfaces';
import { Injectable, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';
@Injectable()
export class AuthService implements OnInit {
  users: userStructure[] | null;
  user: userStructure | undefined;
  private loggedInAccount: boolean = false;
  constructor(private accountsService: AccountsService) {}
  ngOnInit(): void {
    this.accountsService.storeAccounts();
    this.users = this.accountsService.getAccounts();
  }
  login(username: string, password: string): boolean {
    console.log('in authService, login function: ', username, password);
    /*   let account: string | null = localStorage.getItem(username);
    if (account !== null) {
      let accountDetail = JSON.parse(account);
      if (accountDetail.password === password) return true;
      else return false;
    } else return false;*/
    if (this.users !== null)
      this.user = this.users.find((user) => {
        return user.username === username;
      });
    if (this.user === undefined) {
      console.log('user not defiend');
      return false;
    } else {
      if (this.user.password === password) {
        this.loggedInAccount = true;
        console.log('logged in user: ', this.loggedInAccount);

        return true;
      } else {
        console.log('wrong password');
        return false;
      }
    }
  }
  loggedIn(): boolean {
    return this.loggedInAccount;
  }
  logout(): void {
    this.loggedInAccount = false;
  }
}
