import { userStructure } from './../common/interfaces';
import { Injectable, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';
@Injectable()
export class AuthService {
  users: userStructure[] | null;
  user: userStructure | undefined;
  private loggedInAccount: boolean = false;
  private userIsAdmin: boolean = false;
  constructor(private accountsService: AccountsService) {
    this.accountsService.storeAccounts();
    this.users = this.accountsService.getAccounts();
  }
  login(username: string, password: string): boolean {
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
        this.userIsAdmin = this.user.admin;
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
  isAdmin(): boolean {
    return this.userIsAdmin;
  }
}
