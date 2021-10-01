import { userStructure } from './../common/interfaces';
export class AccountsService {
  accounts: userStructure[] | null;

  getAccounts(): userStructure[] | null {
    let datas = localStorage.getItem('datas');
    if (datas !== null) {
      this.accounts = JSON.parse(datas);
      return this.accounts;
    } else return null;
  }

  storeAccounts(): void {
    let JSONDatas = [
      {
        id: 1,
        username: 'saghal',
        password: 'saghal',
        email: 'A@exampl.com',
        admin: true,
      },
      {
        id: 2,
        username: 'jes',
        password: 'jes',
        email: 'B@exampl.com',
        admin: false,
      },
      {
        id: 3,
        username: 'walter',
        password: 'walter',
        email: 'C@exampl.com',
        admin: false,
      },
    ];
    localStorage.setItem('datas', JSON.stringify(JSONDatas));
  }
}
